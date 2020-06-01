import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '../shared/components.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {
  showChat = false
  constructor(private componentsService: ComponentsService) { }

  ngOnInit(): void {
    this.componentsService.chatToggled.subscribe(()=>this.showChat = !this.showChat)
  }

}
