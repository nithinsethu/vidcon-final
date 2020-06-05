import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-frame',
  templateUrl: './video-frame.component.html',
  styleUrls: ['./video-frame.component.css']
})
export class VideoFrameComponent implements OnInit {
  @Input() videoSrcObject;
  @Input() isMuted = false;
  @Input() isMainFrame = false;
  @Input() name;
  @Output() onClicked = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }
  clicked(){
    this.onClicked.emit({src:this.videoSrcObject, name:this.name})
  }

}
