import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    FormsModule,
  ],
  providers: [],
})
export class LoginModule {
}
