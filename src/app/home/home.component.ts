import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackEndService } from '../shared/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('meetingId', {static: true}) id: ElementRef;
  @ViewChild('meetingPwd', {static: true}) pwd: ElementRef;
  constructor(private router: Router, private backEndService: BackEndService) {
  }

  ngOnInit(): void {

  }
  onJoin(){
    this.router.navigate(['/meeting'],{queryParams: {id: this.id.nativeElement.value, pwd: this.pwd.nativeElement.value}} )
    this.backEndService.joinMeeting(this.id.nativeElement.value)
  }
  onNewMeeting(){
    this.backEndService.createNewMeeting()
    setTimeout(()=>this.router.navigate(['/meeting'], {queryParams: {id: this.backEndService.getMeetingId(), pwd: ''}}),50)
    //this.router.navigate(['/meeting'], {queryParams: {id: this.backEndService.getMeetingId(), pwd: ''}})
  }

}
