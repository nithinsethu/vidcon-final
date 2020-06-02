import { Component, OnInit, DoCheck } from '@angular/core';
import { BackEndService } from 'src/app/shared/backend.service';

@Component({
  selector: 'app-video-frames',
  templateUrl: './video-frames.component.html',
  styleUrls: ['./video-frames.component.css']
})
export class VideoFramesComponent implements OnInit, DoCheck {
  streams: any;
  constructor(private backendService: BackEndService) {


  }

  ngOnInit(): void {
    this.streams = this.backendService.getStreams()
  }

  ngDoCheck(): void{
    this.streams = this.backendService.getStreams()
  }
  getMainStream(){
    return this.backendService.getStream()
  }

  keys(dic){
    return Object.keys(dic)
  }

}
