import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  // private apiURL = "http://13.48.205.159/auth";
  private apiURL = environment.BASE_URL + "/auth";
  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  login(credentials: {email:string; password: string}): Observable<{token: string; expirationTime: number}>{
    return this.http.post <{token: string; expirationTime: number}>(`${this.apiURL}/login`, credentials).pipe(
      catchError((error) => {
        if (error.status === 403) {
          this.snackBar.open('User not found or unaauthorized', 'Close', {
            duration: 3000
          });

        }
        return throwError(() => error)
      })
    )
  }

  signup(userInfo: {username: string,email:string; password: string}): Observable<any>{
    return this.http.post<any>(`${this.apiURL}/signup`, userInfo)
  }

  otpVerify(otpCode: {verificationCode: string, email: string}): Observable<any>{
    return this.http.post<any>(`${this.apiURL}/verify`, otpCode)
  }

  private handleError(error: HttpErrorResponse){
    if (error.status === 403 || error.error?.message === 'User not found') {
      return throwError(() => new Error('User not found, Please register  or Contact admin if the problem persists'));
    }
    return throwError(() => new Error('An unexpected error occured. Please try again.'))
  }
}
