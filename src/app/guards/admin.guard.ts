import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  user:any;

  constructor(private router:Router, private auth:AuthService){}
  canActivate():boolean  {
    this.user = this.auth.gettoken();
  
    if (this.user == 'Admin' ) {  
      return true
  }  
  else{
    this.router.navigate(["/signin"]);  
     return false
  }
  }  
  
}
