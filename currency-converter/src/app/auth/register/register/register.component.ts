import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { CurrencyService } from '../../../services/currency.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  public username: string = '';
  public password: string = '';

  registerForm: FormGroup;
  loading: boolean = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private currencyService: CurrencyService,
    private navCtrl: NavController,
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.registerForm.disable(); // FreeCurrencyAPI doesn’t provide a direct OAuth/login API for end-users.
  }

  public onSubmit(): void {
    if (this.registerForm.valid) {
      this.loading = true;
      this.currencyService.register(this.registerForm.value.username, this.registerForm.value.password).subscribe(
        response => {
          this.navCtrl.navigateForward('/login');
        },
        error => {
          this.loading = false;
          this.errorMessage = error.error.message || 'Register failed';
        }
      );
    }
  }

  public goToLogin(): void {
    this.navCtrl.navigateForward('/login');
  }

}
