import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { catchError, switchMap } from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("**** AuthInterceptor ...");
    const token = sessionStorage.getItem('token');
    console.log(token);
    if(token){
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        })
    }

    if ((req.url.indexOf('login') > -1
      || req.url.indexOf('register') > -1
      || req.url.indexOf('refresh') > -1
      || req.url.indexOf('clear') > -1))
      return next.handle(req);

      return next.handle(req).pipe(
        catchError((error) => {
            console.log("catchError in intercept ...");
            if (error instanceof HttpErrorResponse && error.status === 401) {
            return this.handle401Error(req, next);
            }
            return throwError(() => error);
        })
        );
    }
    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
        console.log("Handling 401 Error in AuthInterceptor");
    return this._authService.refresh().pipe(
      switchMap((data: any) => {
        console.log(`handle401Error:: Refresh data in switchMap: ${JSON.stringify(data)}`);
        return next.handle(request);
      }),
      catchError((error) => {
        console.log(`handle401Error:: error: ${error}`);
        if (error.status == '401' && this._authService.isLoggedIn()) {
          this._authService.logout();
        }
        return throwError(() => error);
      })
    );
    return next.handle(request);
  }
}
  