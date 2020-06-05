import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '../shared/components.service';
import { BackEndService } from '../shared/backend.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css'],
})
export class MeetingComponent implements OnInit {
  showChat = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private backendService: BackEndService,
    private componentsService: ComponentsService,
  ) {}

  ngOnInit(): void {
    this.componentsService.chatToggled.subscribe(
      () => (this.showChat = !this.showChat)
    );
    if (!this.route.snapshot.queryParams['new']) {
      this.backendService.joinMeeting(
        this.route.snapshot.queryParams['id'],
        this.route.snapshot.queryParams['name']
      );
    }

    let constraints = {
      video: true,
      audio: true,
      echoCancellation: true,
    };

    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      this.backendService.addMedia(stream);
    });
    // this.route.params.subscribe((params)=>console.log(params))
  }
  onCopy() {
   this.copyMessage('192.168.225.243:4200/meeting?id='+this.backendService.getMeetingId())
  }
  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
