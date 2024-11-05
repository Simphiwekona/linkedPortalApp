import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from '../model/quote.model';

@Injectable({
  providedIn: 'root'
})
export class QuotationsService {

  private apiURL = environment.BASE_URL + "/quotation"

  constructor(private http: HttpClient) { }

  getAllQuotes(): Observable<Quote[]>{
    return this.http.get<Quote[]>(`${this.apiURL}/all`)
  }
}
