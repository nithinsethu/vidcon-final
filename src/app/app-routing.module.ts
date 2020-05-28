import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MeetingComponent } from './meeting/meeting.component';




const appRoutes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'meeting', component: MeetingComponent}

];


@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
