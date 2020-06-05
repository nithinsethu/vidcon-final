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
  @ViewChild('name', {static: true}) name: ElementRef;
  constructor(private router: Router, private backEndService: BackEndService) {
  }

  ngOnInit(): void {

  }
  onJoin(){
    this.router.navigate(['/meeting'],{queryParams: {id: this.id.nativeElement.value, name: this.name.nativeElement.value, pwd: this.pwd.nativeElement.value}} )
    //this.backEndService.joinMeeting(this.id.nativeElement.value)
  }
  onNewMeeting(){
    //this.backEndService.createNewMeeting('xyz')
    // setTimeout(()=>this.router.navigate(['/meeting'], {queryParams: {id: this.backEndService.getMeetingId(),name: 'xyz',pwd: '', new:'true'}}),50)
    this.router.navigate(['/meeting'], {queryParams: {new:'true'}})
    //this.router.navigate(['/meeting'], {queryParams: {id: this.backEndService.getMeetingId(), pwd: ''}})
  }

}
