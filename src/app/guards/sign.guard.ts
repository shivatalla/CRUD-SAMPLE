import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Location} from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class SignGuard implements CanActivate {
  constructor(private router:Router, private _location: Location){
  }
  canActivate(): any {
    debugger;
    if(!localStorage.getItem('user'))
    return true;
    else{    
    this._location.back();
     return false
    }
   
  }
  
}
