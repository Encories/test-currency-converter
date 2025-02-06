import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppModule } from '../app.module';
import { CurrencyConverterComponent } from './currency-converter.component';

@NgModule({
  declarations: [CurrencyConverterComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CurrencyConverterComponent
      }
    ])
  ],
  providers: [],
  exports: [
    CurrencyConverterComponent,
  ],
})
export class CurrencyConverterModule {
}
