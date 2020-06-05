import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MeetingComponent } from './meeting/meeting.component';
import { RouteGuard } from 'src/app/route-guard.service';
import { PreJoinComponent } from './pre-join/pre-join.component';




const appRoutes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'meeting', canActivate: [RouteGuard], component: MeetingComponent},
  {path: 'pre-join', component:PreJoinComponent }

];


@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
