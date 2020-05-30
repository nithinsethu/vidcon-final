import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: string[] = [];

  constructor() {
    for (let i = 0; i < 100; ++i)
      this.messages.push("Aey bhaiya pani puri bolo");
  }

  ngOnInit(): void {
  }

}
