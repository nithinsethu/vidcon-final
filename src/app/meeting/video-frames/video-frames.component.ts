import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { BackEndService } from 'src/app/shared/backend.service';

@Component({
  selector: 'app-video-frames',
  templateUrl: './video-frames.component.html',
  styleUrls: ['./video-frames.component.css'],
})
export class VideoFramesComponent implements OnInit, DoCheck, OnDestroy {
  streams: any;
  names: any;
  mainStream: any;
  mainStreamName: any;
  constructor(private backendService: BackEndService) {}

  ngOnInit(): void {
    this.streams = this.backendService.getStreams();
    this.names = this.backendService.getNames();
    this.backendService.mainStreamChanged.subscribe(({ name, stream }) => {
      this.mainStream = stream;
      this.mainStreamName = name;
    });
  }
  ngOnDestroy(){
    this.backendService.mainStreamChanged.unsubscribe();
  }

  ngDoCheck(): void {
    this.streams = this.backendService.getStreams();
    this.names = this.backendService.getNames();
  }
  changeMainStream(event) {
    this.mainStream = event.src;
    this.mainStreamName = event.name;
  }

  keys(dic) {
    return Object.keys(dic);
  }
}
