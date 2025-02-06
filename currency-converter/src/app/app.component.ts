import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
})
export class AppComponent {
  title = 'currency-converter';
}
