import { Injectable } from "@angular/core";
import * as io from 'socket.io-client';
declare var SimplePeer: any;
@Injectable()
export class BackEndService{
   peer1 = new SimplePeer({ initiator: true })
   peer2 = new SimplePeer()
  constructor(){
    this.peer1.on('signal', data => {
      // when peer1 has signaling data, give it to peer2 somehow
      this.peer2.signal(data)
    })

    this.peer2.on('signal', data => {
      // when peer2 has signaling data, give it to peer1 somehow
      this.peer1.signal(data)
    })
    this.peer1.on('connect', () => {
      // wait for 'connect' event before using the data channel
      this.peer1.send('hey peer2, how is it going?')
    })

    this.peer2.on('data', data => {
      // got a data channel message
      console.log('got a message from peer1: ' + data)
    })
  }
  logToConsole(){
    console.log()

  }
}
