import { Component, OnInit } from '@angular/core';
import { ComponentsService } from 'src/app/shared/components.service';

@Component({
  selector: 'app-chat-toggle',
  templateUrl: './chat-toggle.component.html',
  styleUrls: ['./chat-toggle.component.css']
})
export class ChatToggleComponent implements OnInit {

  constructor(private componentsService: ComponentsService) { }

  ngOnInit(): void {
  }
  onChatToggle(){
    this.componentsService.chatToggled.next()
  }

}
