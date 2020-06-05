import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BackEndService } from './shared/backend.service';

@Injectable()
export class RouteGuard implements CanActivate{
  constructor(private router: Router, private backendService: BackEndService){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    if(route.queryParams.new){
      if(!route.queryParams.name)
        this.router.navigate(['/pre-join'],{skipLocationChange: true, queryParams: route.queryParams})
      return true;
    }
     if(!route.queryParams.id){
      this.router.navigate(['/'])
    }
     if(!route.queryParams.name){
      this.router.navigate(['/pre-join'], {skipLocationChange: true, queryParams: route.queryParams})
    }

    return true;
  }
}
