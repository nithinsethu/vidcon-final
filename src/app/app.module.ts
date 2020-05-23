import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoFramesComponent } from './video-frames/video-frames.component';
import { HomeComponent } from './home/home.component';
import { VideoFrameComponent } from './video-frames/video-frame/video-frame.component';
import { ControlsComponent } from './controls/controls.component';
import { VideoToggleComponent } from './controls/video-toggle/video-toggle.component';
import { AudioToggleComponent } from './controls/audio-toggle/audio-toggle.component';
import { ScreenShareComponent } from './controls/screen-share/screen-share.component';
import { ChatComponent } from './controls/chat/chat.component';
import { DisconnectComponent } from './controls/disconnect/disconnect.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoFramesComponent,
    HomeComponent,
    VideoFrameComponent,
    ControlsComponent,
    VideoToggleComponent,
    AudioToggleComponent,
    ScreenShareComponent,
    ChatComponent,
    DisconnectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
