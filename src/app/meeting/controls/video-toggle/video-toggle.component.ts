import { Component, OnInit } from '@angular/core';
import { BackEndService } from 'src/app/shared/backend.service';

@Component({
  selector: 'app-video-toggle',
  templateUrl: './video-toggle.component.html',
  styleUrls: ['./video-toggle.component.css']
})
export class VideoToggleComponent implements OnInit {

  constructor(private backendService: BackEndService) {
  }
  onClick(){
    this.backendService.toggleVideo()
  }
  ngOnInit(): void {
  }

}
