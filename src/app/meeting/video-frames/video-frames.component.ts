import { Component, OnInit, DoCheck } from '@angular/core';
import { BackEndService } from 'src/app/shared/backend.service';

@Component({
  selector: 'app-video-frames',
  templateUrl: './video-frames.component.html',
  styleUrls: ['./video-frames.component.css']
})
export class VideoFramesComponent implements OnInit, DoCheck {
  streams: any;
  names: any;
  mainStream: any;
  mainStreamName: any;
  constructor(private backendService: BackEndService) {


  }

  ngOnInit(): void {
    // this.mainStream = this.backendService.getStream()

    this.streams = this.backendService.getStreams()
    this.names = this.backendService.getNames()

  }

  ngDoCheck(): void{
    if(!this.mainStream){
      this.mainStream = this.backendService.getStream()
      this.mainStreamName = this.backendService.getName()
    }
    this.streams = this.backendService.getStreams()
    this.names = this.backendService.getNames()
  }
  changeMainStream(event){
    this.mainStream = event.src
    this.mainStreamName = event.name
  }

  keys(dic){
    return Object.keys(dic)
  }

}
