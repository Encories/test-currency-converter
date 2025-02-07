import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { AuthState } from '../store/auth/auth.state';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private key: string | null = null;

  constructor(
    private navCtrl: NavController,
    private store: Store,
  ) {
    this.store.select(AuthState.getValue).subscribe(val => {
      this.key = val;
    });
  }

  canActivate(): boolean {
    const isLoggedIn = !!this.key;
    if (!this.key) {
      this.navCtrl.navigateForward('/login');
    }
    return isLoggedIn;
  }

}
