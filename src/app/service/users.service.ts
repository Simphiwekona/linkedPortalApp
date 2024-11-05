import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Client } from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = environment.BASE_URL + "/users";

  constructor(private http: HttpClient) {}

//  getUsers(): Observable<any> {
//     return this.http.get<any>(this.jsonUrl);
//  }
  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.apiUrl}/add`, client, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }
  getClients(): Observable<Client[]>{
    return this.http.get<Client[]>(`${this.apiUrl}/all`)
  }
}
