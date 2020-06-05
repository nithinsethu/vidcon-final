import {
  Component,
  OnInit,
  AfterViewChecked,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { BackEndService } from '../../shared/backend.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('chatHistory') private chatHistory: ElementRef;
  messages: string[] = [];
  textMessage: string = '';
  constructor(private service: BackEndService) {
    for (let i = 0; i < 20; ++i) this.messages.push('Hello');
    this.service.messageRecieved.subscribe(({ msg, name }) =>
      console.log(msg, 'from', name)
    );
  }

  ngOnInit(): void {
    //When message is recieved

  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.chatHistory.nativeElement.scrollTop = this.chatHistory.nativeElement.scrollHeight;
    } catch (err) {}
  }

  sendMessage() {
    if (this.textMessage == '') return;
    this.messages.push(this.textMessage);
    //for sending  messages
    this.service.sendMessage(this.textMessage);
    this.textMessage = '';
  }
}
