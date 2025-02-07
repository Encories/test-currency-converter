import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { CurrencyService } from '../../../services/currency.service';
import { Login } from '../../../store/auth/auth.actions';

@Component({
  selector: 'app-login',
  standalone: false,
  styleUrl: './login.component.scss',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  public loginForm: FormGroup;
  public loading: boolean = false;
  public errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private currencyService: CurrencyService,
    private store: Store,
    private navCtrl: NavController,
  ) {
    this.loginForm = this.fb.group({
      apiKey: ['', Validators.required],
    });
  }

  public onSubmit(): void {
    if (this.loginForm.valid) {
      this.loading = true;
      this.currencyService.checkKey(this.loginForm.get('apiKey')?.value).subscribe(
        response => {
          this.store.dispatch(new Login({apiKey: this.loginForm.get('apiKey')?.value}));
          this.navCtrl.navigateForward('/currency-converter');
        },
        error => {
          this.loading = false;
          this.errorMessage = error.error.message || 'Login failed';
        },
      );
    }
  }

  public goToRegister(): void {
    window.location.href = 'https://app.freecurrencyapi.com/';
  }
}
