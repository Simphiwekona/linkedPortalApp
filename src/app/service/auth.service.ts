import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private apiURL = "http://16.16.242.234:8080/auth";
  constructor(private http: HttpClient) { }

  login(credentials: {email:string; password: string}): Observable<{token: string; expirationTime: number}>{
    return this.http.post <{token: string; expirationTime: number}>(`${this.apiURL}/login`, credentials)
  }

  signup(userInfo: {username: string,email:string; password: string}): Observable<any>{
    return this.http.post<any>(`${this.apiURL}/signup`, userInfo)
  }

  otpVerify(otpCode: {verificationCode: string, email: string}): Observable<any>{
    return this.http.post<any>(`${this.apiURL}/verify`, otpCode)
  }
}
