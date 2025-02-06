import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class CurrencyService {
  private API_KEY = 'your-api-key';
  private API_URL = `https://api.freecurrencyapi.com/v1/latest?apikey=${this.API_KEY}`;

  constructor(private http: HttpClient) {}

  getExchangeRate(base: string, target: string): Observable<number> {
    return this.http
      .get<{ data: { [key: string]: number } }>(`${this.API_URL}&base_currency=${base}&currencies=${target}`)
      .pipe(map((response) => response.data[target]));
  }
}
