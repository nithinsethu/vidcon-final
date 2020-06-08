import { Component, OnInit } from '@angular/core';
import { ComponentsService } from 'src/app/shared/components.service';

@Component({
  selector: 'app-screen-share',
  templateUrl: './screen-share.component.html',
  styleUrls: ['./screen-share.component.css']
})
export class ScreenShareComponent implements OnInit {

  constructor(private componentService: ComponentsService) { }

  ngOnInit(): void {
  }
  onScreenShare(){
    this.componentService.screenShare.next();
  }

}
