import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComponentsService } from '../shared/components.service';
import { BackEndService } from '../shared/backend.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
const mediaDevices = navigator.mediaDevices as any;
@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css'],
})
export class MeetingComponent implements OnInit, OnDestroy {
  showChat = false;
  screenSharing = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private backendService: BackEndService,
    private componentsService: ComponentsService
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
    this.componentsService.screenShare.subscribe(() => {
      if (this.screenSharing) {
        this.backendService.stopScreenShare();
        this.screenSharing != this.screenSharing;
      } else {
        this.screenCapture({ audio: false, video: true });
      }
    });
  }
  screenCapture(displayMediaOptions) {
    mediaDevices.getDisplayMedia(displayMediaOptions).then((stream) => {
      this.backendService.startScreenShare(stream);
      stream
        .getVideoTracks()[0]
        .addEventListener('ended', () =>
        this.backendService.stopScreenShare()
        );
    });
  }
  ngOnDestroy() {
    this.componentsService.chatToggled.unsubscribe();
    this.componentsService.screenShare.unsubscribe();
  }
  onCopy() {
    this.copyMessage(
      environment.HOST + '/meeting?id=' + this.backendService.getMeetingId()
    );
  }
  copyMessage(val: string) {
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
