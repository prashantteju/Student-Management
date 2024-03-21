import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private auth:AuthService,private router:Router){

  }

  canActivate(){
if(this.auth.IsLoggedIn()){
  return true;
}
else{
  // alert(123);
  this.router.navigate(['/singup']);
  return false;
}


   
  }
  
}
