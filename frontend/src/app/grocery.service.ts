

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError} from 'rxjs/operators'
import { Grocery } from './grocery';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  private apiUrl = 'http://localhost:8083';
  //private apiUrl ='https://jwtbackend-production.up.railway.app'

  constructor(private http: HttpClient) { }

  getGrocerys(): Observable<Grocery[]> {
    let url = `${this.apiUrl}/grocerys`;
    return this.http.get<Grocery[]>(url).pipe(catchError(this.handleError))
  }
  
  getGrocery(id: number): Observable<Grocery>{
    let url = `${this.apiUrl}/grocery/${id}`;
    return this.http.get<Grocery>(url).pipe(catchError(this.handleError)); 
  }
  
  addGrocery(grocery: Grocery): Observable<Grocery> {
    let url = `${this.apiUrl}/grocery`;
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post<Grocery>(url, grocery, httpOptions).pipe(catchError(this.handleError));
  }

  updateGrocery(id: number, grocery: Grocery): Observable<Grocery> {
    let url = `${this.apiUrl}/grocery/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }
    return this.http.put<Grocery>(url, grocery, httpOptions).pipe(catchError(this.handleError));
  }
  
  deleteGrocery(ids: number[]){
    console.log(ids);
    let url = `${this.apiUrl}/grocerys/${ids.join(',')}`;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  private handleError(error: any){
    console.log(error);
    return throwError(error);
  }
 
  

}



