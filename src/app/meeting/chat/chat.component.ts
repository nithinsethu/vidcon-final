import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../../shared/backend.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: string[] = [];
  textMessage: string = "";
  constructor(private service: BackEndService) {
    for (let i = 0; i < 100; ++i)
      this.messages.push("");
  }

  ngOnInit(): void {
  }

  sendMessage() {
    if (this.textMessage == "") return;
    this.messages.push(this.textMessage)
    this.textMessage = "";
  }
}
