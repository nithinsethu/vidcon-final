import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoFramesComponent } from './meeting/video-frames/video-frames.component';
import { HomeComponent } from './home/home.component';
import { VideoFrameComponent } from './meeting/video-frames/video-frame/video-frame.component';
import { ControlsComponent } from './meeting/controls/controls.component';
import { VideoToggleComponent } from './meeting/controls/video-toggle/video-toggle.component';
import { AudioToggleComponent } from './meeting/controls/audio-toggle/audio-toggle.component';
import { ScreenShareComponent } from './meeting/controls/screen-share/screen-share.component';
import { ChatComponent } from './meeting/controls/chat/chat.component';
import { DisconnectComponent } from './meeting/controls/disconnect/disconnect.component';
import { BackEndService } from './shared/backend.service';
import { MeetingComponent } from './meeting/meeting.component';
import { AppRoutingModule } from './app-routing.module';

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
    DisconnectComponent,
    MeetingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BackEndService],
  bootstrap: [AppComponent]
})
export class AppModule { }
