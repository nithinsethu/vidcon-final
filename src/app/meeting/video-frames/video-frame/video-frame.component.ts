import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-frame',
  templateUrl: './video-frame.component.html',
  styleUrls: ['./video-frame.component.css']
})
export class VideoFrameComponent implements OnInit {
  @Input() videoSrcObject;
  constructor() { }

  ngOnInit(): void {
  }
  clicked(){
    console.log('clicked')
  }

}
