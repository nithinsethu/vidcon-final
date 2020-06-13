import { Injectable, EventEmitter } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
declare var SimplePeer: any;
@Injectable()
export class BackEndService {
  private names:any =[] ;
  private name: string;
  private passiveStream:any={};
  private stream: any;
  private streams: any = [];
  private socket: any;
  private meetingId: number;
  private peers: any = [];
  messageRecieved = new EventEmitter<{msg: string, name: string}>();
  mainStreamChanged = new Subject<any>();


  constructor() {
    this.socket = io(environment.SOCKET_ENDPOINT);
    this.socket.on('messageRecieved',(sid,msg)=>this.messageRecieved.emit({msg, name: this.names[sid]}))
    this.socket.on('newJoin', (id, name) => {
      this.names[id] = name;
      this.peers[id] = new SimplePeer();
      this.peers[id].on('signal', (data) => {
        this.socket.emit('signalData', id, data);
      });
      this.peers[id].on('stream', (stream) => {
        this.streams[id] = stream;
      });
      this.peers[id].addStream(this.stream);
    });
    this.socket.on('onSignalData', (member, data) => {
      this.peers[member].signal(data);
    });
    this.socket.on('disconnected', (id) => {
      this.peers[id].destroy();
      delete this.peers[id];
      this.streams[id] = null;
      delete this.streams[id];
      delete this.names[id];
    });
  }
  addMedia(stream) {
    this.passiveStream = stream
    this.mainStreamChanged.next({name:this.name,stream})
    this.stream = stream;

    this.streams['self'] = stream;

    Object.keys(this.peers).forEach((id) => {
      this.peers[id].addStream(stream);
    });
  }
  replaceTrack(track){
    Object.keys(this.peers).forEach((id) => {
      this.peers[id].replaceTrack(this.stream.getVideoTracks()[0],track,this.stream);
    });
  }
  removeStream(stream){
    Object.keys(this.peers).forEach((id) => {
      this.peers[id].removeStream(stream)
    });
  }
  addStream(stream){
    Object.keys(this.peers).forEach((id) => {
      this.peers[id].addStream(stream)
    });
  }

  addTrack(track){
    Object.keys(this.peers).forEach((id) => {
      this.peers[id].addTrack(track,this.stream);
    });
  }
  createNewMeeting(name: string) {
    this.name = name;
    this.names['self'] = this.name;
    this.socket.emit('newMeeting', name, (meetingId: number) => {
      this.meetingId = meetingId;
    });
  }
  joinMeeting(meetingId: number, name: string) {
    this.name = name;
    this.names['self'] = name;
    this.meetingId = meetingId;
    this.socket.emit('joinMeeting', meetingId, name, (members) => {
      members.forEach((member) => {
        this.names[member.id] = member.name;
        this.peers[member.id] = new SimplePeer({
          initiator: true,
          trickle: false,
        });
        this.peers[member.id].on('signal', (data) => {
          this.socket.emit('signalData', member.id, data);
        });
        this.peers[member.id].on('stream', (stream) => {
          this.streams[member.id] = stream;
        });
        // this.peers[member].on('connect', function() {
        //   this.send(' hellooooo');
        // });
      });
    });
  }

  getMeetingId() {
    return this.meetingId;
  }
  getStreams() {
    return this.streams;
  }
  getStream() {
    return this.stream;
  }
  getNames(){
    return this.names;
  }
  getName(){
    return this.name;
  }
  toggleAudio(){
    this.stream.getAudioTracks()[0].enabled = !this.stream.getAudioTracks()[0].enabled
  }
  toggleVideo(){
    this.stream.getVideoTracks()[0].enabled = !this.stream.getVideoTracks()[0].enabled
  }
  disconnect(){
    this.socket.disconnect()
    // window.location.reload();

  }
  //messages
  sendMessage(msg: String){
    this.socket.emit('message',msg)
  }
  startScreenShare(str){
    // this.toggleVideo()
    this.replaceTrack(str.getVideoTracks()[0])
    //this.replaceTrack(str.getVideoTracks()[0])

    this.stream = str;
    this.streams['self'] = str;
    this.mainStreamChanged.next({name:this.name,stream:str});


  }
  stopScreenShare(){
    this.stream = this.passiveStream
    this.replaceTrack(this.stream.getVideoTracks()[0])
    console.log(this.stream.getTracks())
    // console.log(this.stream.getTracks())
    // //this.addStream(this.passiveStream)
    this.streams['self'] = this.passiveStream;
    this.mainStreamChanged.next({name:this.name,stream:this.passiveStream});
    // this.stream = this.passiveStream;
  }

}
