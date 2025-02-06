import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { Login } from '../../../store/auth/auth.actions';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
})
export class LoginComponent {
  public username: string = '';
  public password: string = '';

  constructor(private navCtrl: NavController, private store: Store) {}

  public login(): void {
    this.store.dispatch(new Login({ username: this.username, password: this.password }));
    this.navCtrl.navigateForward('/currency-converter');
  }

  public goToRegister(): void {
    this.navCtrl.navigateForward('/register');
  }
}
