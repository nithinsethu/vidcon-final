import { Component, OnInit } from '@angular/core';
import { BackEndService } from 'src/app/shared/backend.service';

@Component({
  selector: 'app-audio-toggle',
  templateUrl: './audio-toggle.component.html',
  styleUrls: ['./audio-toggle.component.css']
})
export class AudioToggleComponent implements OnInit {
  toggled = false;

  constructor(private backendService: BackEndService) {

  }
  onClick(){
    this.backendService.toggleAudio();
    this.toggled = !this.toggled;
  }
  ngOnInit(): void {
  }

}
