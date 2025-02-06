import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  public username: string = '';
  public password: string = '';

  constructor(private navCtrl: NavController) {}

  public register(): void {
    this.navCtrl.navigateBack('/login');
  }

}
