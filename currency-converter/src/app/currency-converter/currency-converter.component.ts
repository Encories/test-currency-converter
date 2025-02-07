import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { CurrencyService } from '../services/currency.service';
import { Logout } from '../store/auth/auth.actions';

export interface Conversion {
  amount: number;
  fromCurrency: string;
  toCurrency: string;
  result: number;
  timestamp: Date;
}

@Component({
  selector: 'app-currency-converter',
  standalone: false,
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.scss',
})
export class CurrencyConverterComponent {
  public amount: number = 1;
  public fromCurrency: string = 'USD';
  public toCurrency: string = 'EUR';
  public result: number | null = null;
  public showResult: boolean = false;
  public conversions: Conversion[] = [];

  constructor(
    private navCtrl: NavController,
    private currencyService: CurrencyService,
    private store: Store,
  ) {
  }

  public convert(): void {
    this.currencyService.getExchangeRate(this.fromCurrency, this.toCurrency).subscribe((rate) => {
      this.result = this.amount * rate;
      this.showResult = true;

      this.conversions.push({
        amount: this.amount,
        fromCurrency: this.fromCurrency,
        toCurrency: this.toCurrency,
        result: this.result,
        timestamp: new Date(),
      });
    });
  }

  public onCurrencyChange(): void {
    this.showResult = false;
  }

  public logout(): void {
    this.store.dispatch(new Logout());
    this.navCtrl.navigateRoot('/login');
  }

}
