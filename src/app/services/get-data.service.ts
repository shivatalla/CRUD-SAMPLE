import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './../model/users';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  usersApi = 'http://localhost:3000/users';

  constructor(private _http: HttpClient) { }

  //Retrive the data
  public getUsers(): Observable<Users[]> {
    return this._http.get<Users[]>(this.usersApi)
      .pipe(catchError(this.errorMsg));
  }

  //Create
  public createUser(user: Users): Observable<Users[]> {
    return this._http.post<Users[]>(this.usersApi, user)
      .pipe(catchError(this.errorMsg));
  }

  //Update 
  public editUsers(user: Users): Observable<Users[]> {
    return this._http.get<Users[]>(this.usersApi + '/' + user)
      .pipe(catchError(this.errorMsg));
  }
  public updateUser(user: Users): Observable<Users[]> {
    let headers = { 'headers': 'Content-Type: application/json' }
    debugger
    return this._http.patch<Users[]>(this.usersApi + '/' + user.id, user, { headers })
      .pipe(catchError(this.errorMsg));
  }


  //Delete the data
  public deleteUser(id): Observable<Users[]> {
    return this._http.delete<Users[]>(this.usersApi + '/' + id)
      .pipe(catchError(this.errorMsg));
  }
 
  //error handling
  errorMsg(err) {
    let msg = '';
    msg = 'Error:' + err.message;
    return throwError(msg);
  }

}