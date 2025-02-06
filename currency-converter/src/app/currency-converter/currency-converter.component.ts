import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-currency-converter',
  standalone: false,
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.scss'
})
export class CurrencyConverterComponent {
  public amount: number = 1;
  public fromCurrency: string = 'USD';
  public toCurrency: string = 'EUR';
  public result: number | null = null;

  constructor(private navCtrl: NavController, private currencyService: CurrencyService) {}

  public convert(): void {
    this.currencyService.getExchangeRate(this.fromCurrency, this.toCurrency).subscribe((rate) => {
      this.result = this.amount * rate;
    });
  }

  public logout(): void {
    this.navCtrl.navigateRoot('/login');
  }

}
