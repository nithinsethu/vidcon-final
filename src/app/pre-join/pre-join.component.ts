import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackEndService } from '../shared/backend.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pre-join',
  templateUrl: './pre-join.component.html',
  styleUrls: ['./pre-join.component.css']
})
export class PreJoinComponent implements OnInit {
  @ViewChild('name', {static: true}) name: ElementRef;
  @ViewChild('f', {static: true}) joinForm: NgForm;
  constructor(private route: ActivatedRoute, private backendService: BackEndService, private router: Router) { }

  ngOnInit(): void {
  }
  onJoin(){
    if(this.route.snapshot.queryParams['new']){
      this.backendService.createNewMeeting(this.name.nativeElement.value)
    }
    this.router.navigate(['/meeting'],{queryParams:{name:this.name.nativeElement.value}, queryParamsHandling:'merge'})

  }

}
