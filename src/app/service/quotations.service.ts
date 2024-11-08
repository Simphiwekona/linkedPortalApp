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
  getQuoteById(quotationId: number): Observable<Quote>{
    return this.http.get<Quote>(`${this.apiURL}/quote/${quotationId}`);
  }
  downloadQuotation(quotationId: number): Observable<Blob> {
    return this.http.get(`${this.apiURL}/download-pdf?quotationId=${quotationId}`, {
      responseType: 'blob' // Ensure response type is 'blob'
    });
  }
  
}
