import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
declare var SimplePeer: any;
@Injectable()
export class BackEndService {
  private stream: any;
  private streams: any={};
  private socket: any;
  private meetingId: number;
  private peers: any = {};
  constructor() {
    this.socket = io(environment.SOCKET_ENDPOINT);
    this.socket.on('newJoin', (id) => {
      if (!this.peers[id]) {
        this.peers[id] = new SimplePeer();
        this.peers[id].on('signal',   (data)=>{
          this.socket.emit('signalData', id, data);
        });
        this.peers[id].on('stream', stream =>{this.streams[id] = stream})
        this.peers[id].addStream(this.stream);
      }
      //console.log(this.peers);
    });
    this.socket.on('onSignalData', (member, data) => {
      this.peers[member].signal(data);
    });
    this.socket.on('disconnected', (id)=>{
      this.peers[id].destroy()
      delete this.peers[id];
      delete this.streams[id];
    })
  }

   addMedia(stream){
    this.stream = stream;
    Object.keys(this.peers).forEach((id)=> this.peers[id].addStream(stream));

  }
  createNewMeeting() {
    this.socket.emit('newMeeting', (meetingId: number) => {
      this.meetingId = meetingId;
    });
  }
  joinMeeting(meetingId: number) {

    this.meetingId = meetingId;
    this.socket.emit('joinMeeting', meetingId, (members) => {
      members.forEach((member) => {
        this.peers[member] = new SimplePeer({
          initiator: true,
          trickle: false,
        });
        this.peers[member].on('signal',    (data)=>{
          this.socket.emit('signalData', member , data);
        });
        this.peers[member].on('stream', stream =>{this.streams[member]=stream})
        // this.peers[member].on('connect', function() {
        //   this.send(' hellooooo');
        // });
      });
    });
  }

  getMeetingId() {
    return this.meetingId;
  }
  getStreams(){
    return this.streams;
  }
  getStream(){
    return this.stream;
  }

}
