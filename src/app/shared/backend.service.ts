import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
declare var SimplePeer: any;
@Injectable()
export class BackEndService {
  private socket: any;
  private meetingId: number;
  private peers: any = {};
  constructor() {
    this.socket = io(environment.SOCKET_ENDPOINT);
    this.socket.on('newJoin', (id) => {
      if (!this.peers[id]) {
        this.peers[id] = new SimplePeer();
        this.peers[id].sid = id;
        this.peers[id].socket = this.socket;
        this.peers[id].on('signal', function (data){
          this.socket.emit('signalData', this.sid, data);
          //this.peers.find((id)=>)
          //console.log(this)
        });
        this.peers[id].on('data', (data) =>
          console.log(new TextDecoder('utf-8').decode(data))
        );
      }
      //console.log(this.peers);
    });
    this.socket.on('onSignalData', (member, data) => {
      this.peers[member].signal(data);
    });
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
        this.peers[member].sid = member
        this.peers[member].socket = this.socket;
        this.peers[member].on('signal',  function (data){
          this.socket.emit('signalData', this.sid, data);
        });
        this.peers[member].on('connect', function() {
          this.send('hellooooo');
        });
      });
    });
  }

  getMeetingId() {
    return this.meetingId;
  }
}
