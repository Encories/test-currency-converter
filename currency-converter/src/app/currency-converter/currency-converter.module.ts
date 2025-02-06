import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { CurrencyConverterComponent } from './currency-converter.component';

@NgModule({
  declarations: [CurrencyConverterComponent],
  imports: [
    FormsModule,
    AppModule,
  ],
  providers: [],
  exports: [
    CurrencyConverterComponent,
  ],
})
export class CurrencyConverterModule {
}
