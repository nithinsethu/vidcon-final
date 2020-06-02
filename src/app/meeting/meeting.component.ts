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
  constructor(private route: ActivatedRoute, private router: Router, private backendService: BackEndService ,private componentsService: ComponentsService) {}

  ngOnInit(): void {
    this.componentsService.chatToggled.subscribe(
      () => (this.showChat = !this.showChat)
    );
    if(this.route.snapshot.queryParams['id']){
      if(!this.route.snapshot.queryParams['new']){
        this.backendService.joinMeeting(this.route.snapshot.queryParams['id'])
      }

      let constraints = {
        video: true,
        audio: true,
      };


      navigator.mediaDevices.getUserMedia(constraints).then((stream)=>{
        this.backendService.addMedia(stream)
      })
    }
    else{
      this.router.navigate(['/'])
    }
    // this.route.params.subscribe((params)=>console.log(params))





  }
}
