import { Component, OnInit } from '@angular/core';
import { BackEndService } from 'src/app/shared/backend.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-disconnect',
  templateUrl: './disconnect.component.html',
  styleUrls: ['./disconnect.component.css']
})
export class DisconnectComponent implements OnInit {

  constructor(private router:Router ,private backendService: BackEndService) {

  }

  ngOnInit(): void {
  }
  onDisconnect(){
    this.backendService.disconnect();
    window.location.replace(environment.HOST);
  }

}
