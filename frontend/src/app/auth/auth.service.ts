

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private bLoggedIn = false;
  private _authUrl = "http://localhost:8083";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private _http: HttpClient) { }

  login(user: User) {
    const loginUrl = `${this._authUrl}/authenticate`;
    return this._http.post<any>(loginUrl, user, this.httpOptions);
  }

  refresh() {
    console.log("AuthService:: Refresh posting");
    const refreshUrl = `${this._authUrl}/refresh`;
    return this._http.get(refreshUrl, {});
  }

  setLoggedIn() {
    this.bLoggedIn = true;
  }

  isLoggedIn() {
    if (this.bLoggedIn)
      return true;
    else
      return false;
  }

  logout() {
    console.log("AuthService:: Clear posting");
    try{
        sessionStorage.clear();
        this.bLoggedIn = false;
    }
    catch(err){
        console.log(err);
    }
  }

}



