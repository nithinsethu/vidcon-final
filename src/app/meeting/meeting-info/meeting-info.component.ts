import { Component, OnInit } from '@angular/core';
import { BackEndService } from 'src/app/shared/backend.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-meeting-info',
  templateUrl: './meeting-info.component.html',
  styleUrls: ['./meeting-info.component.css']
})
export class MeetingInfoComponent implements OnInit {
  infoToggled = false;
  constructor(private backendService: BackEndService) { }

  ngOnInit(): void {
  }
  getMeetingId(){
    return this.backendService.getMeetingId()
  }
  getMeetingURL(){
    return environment.HOST+'/meeting?id='+this.backendService.getMeetingId()
  }
  onInfo(){
    this.infoToggled = !this.infoToggled;
  }

}
