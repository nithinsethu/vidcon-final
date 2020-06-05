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
import { DisconnectComponent } from './meeting/controls/disconnect/disconnect.component';
import { BackEndService } from './shared/backend.service';
import { MeetingComponent } from './meeting/meeting.component';
import { AppRoutingModule } from './app-routing.module';
import { ChatToggleComponent } from './meeting/controls/chat-toggle/chat-toggle.component';
import { ChatComponent } from './meeting/chat/chat.component';
import { ComponentsService } from './shared/components.service';
import { FormsModule } from '@angular/forms';
import { RouteGuard } from 'src/app/route-guard.service';
import { PreJoinComponent } from './pre-join/pre-join.component';

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
    DisconnectComponent,
    MeetingComponent,
    ChatToggleComponent,
    ChatComponent,
    PreJoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BackEndService, ComponentsService, RouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
