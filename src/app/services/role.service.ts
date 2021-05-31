import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Roles } from './../model/roles';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleService { 
  rolesApi = 'http://localhost:3000/roles';

  constructor(private _http: HttpClient) { }

  //Retrive the data
  public getRoles() {
    return this._http.get<Roles>(this.rolesApi);
  }

  //Create
  public createRole(role: Roles): Observable<Roles[]> {
    return this._http.post<Roles[]>(this.rolesApi, role)
      .pipe(catchError(this.errorMsg));
  }

  //Update 
  public editRoles(role: Roles): Observable<Roles[]> {
    return this._http.get<Roles[]>(this.rolesApi + '/' + role)
      .pipe(catchError(this.errorMsg));
  }
  public updateRole(role: Roles): Observable<Roles[]> {
    let headers = { 'headers': 'Content-Type: application/json' }
    debugger
    return this._http.patch<Roles[]>(this.rolesApi + '/' + role.id, role, { headers })
      .pipe(catchError(this.errorMsg));
  }


  //Delete the data

  public deleteRole(role): Observable<Roles[]> {
    return this._http.delete<Roles[]>(this.rolesApi + '/' + role)
      .pipe(catchError(this.errorMsg));
  }

  //error handling
  errorMsg(err) {
    let msg = '';
    msg = 'Error:' + err.message;
    return throwError(msg);
  }

}