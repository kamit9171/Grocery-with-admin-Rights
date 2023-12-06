

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class Logger implements HttpInterceptor {

    constructor(private _service: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`**** LogRequestInterceptor => url = ${req.url}, method = ${req.method}`);
    console.log(`isLoggedIn ${this._service.isLoggedIn()}`);
    req.headers.keys().map(key => console.log(`${key}=${req.headers.get(key)}`));
    return next.handle(req);
  }
  
}



