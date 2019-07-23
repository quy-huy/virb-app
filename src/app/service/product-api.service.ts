import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  serverUrl = 'https://demo-linhnt.herokuapp.com/api/admins/products';
  errorData: {};
  constructor(private http: HttpClient) { }
  
  
  public getJSON(opts?: any): Observable<any> {
    return this.http.get(`${this.serverUrl}`, {
      params: opts
    });
  }
 
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      console.error('An error occurred:', error.error.message);
    } else {

    }

    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
