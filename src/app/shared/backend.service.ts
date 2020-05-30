import { Injectable } from "@angular/core";
import * as SimplePeer from 'simple-peer';
//import * as SimplePeer from 'simple-peer';
//import * as SimplePeer from 'simple-peer';
//import * as Peer from "simple-peer"
@Injectable()
export class BackEndService{
  peers: any[]=[];
  // constructor(){
  //   this.peers.push(new Peer({initiator: true}));
  //   this.peers.push(new Peer());
  //   this.peers[0].on('signal', data=>{
  //     this.peers[1].signal(data);
  //   })
  //   this.peers[1].on('signal', data=>{
  //     this.peers[0].signal(data);
  //   })
  //   this.peers[0].on('connect', () => {
  //     this.peers[1].send('hey peer2, how is it going?')
  //   })
  //   this.peers[1].on('data', data => {
  //     console.log('got a message from peer1: ' + data)
  //   })
  // }
  logToConsole(){
    console.log(SimplePeer.WEBRTC_SUPPORT)
    console.log(SimplePeer)
  }
}
