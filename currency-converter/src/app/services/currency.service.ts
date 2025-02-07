import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthState } from '../store/auth/auth.state';

@Injectable({
  providedIn: 'root',
})

export class CurrencyService {
  private API_KEY: string | null = null;
  private API_URL = `https://api.freecurrencyapi.com/v1`;

  constructor(
    private http: HttpClient,
    private store: Store
  ) {
    this.store.select(AuthState.getValue).subscribe(val => {
      this.API_KEY = val;
    });
  }

  public checkKey(key: string): Observable<any> {
    return this.http.get(`${this.API_URL}/status?apikey=${key}`);
  }

  public getExchangeRate(base: string, target: string): Observable<number> {
    return this.http
      .get<{ data: { [key: string]: number } }>(`${this.API_URL}/latest?apikey=${this.API_KEY}&currencies=${target}&base_currency=${base}`)
      .pipe(map((response) => response.data[target]));
  }

  public register(username: string, password: string): Observable<any> {
    return this.http.post(  `${this.API_URL}/register`  , { username, password });
  }
}
