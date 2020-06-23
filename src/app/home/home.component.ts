import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackEndService } from '../shared/backend.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('f', {static: true}) joinForm: NgForm;
  constructor(private router: Router, private backEndService: BackEndService) {
  }

  ngOnInit(): void {

  }
  onJoin(){
    // this.router.navigate(['/meeting'],{queryParams: {id: this.id.nativeElement.value, name: this.name.nativeElement.value}} )
    this.router.navigate(['/meeting'],{queryParams: {id: this.joinForm.value.id, name: this.joinForm.value.name}} )
  }
  onNewMeeting(){

    this.router.navigate(['/meeting'], {queryParams: {new:'true'}})
  }

}
