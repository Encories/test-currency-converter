import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy, RouterOutlet } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyService } from './services/currency.service';
import { HeaderComponent } from './shared/header/header.component';
import { AuthState } from './store/auth/auth.state';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    NgxsModule.forRoot([AuthState]),
    NgxsStoragePluginModule.forRoot({
      keys: ['auth.token', 'auth.username'],
    }),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    IonicModule,
    FormsModule,

  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    CurrencyService,
  ],
  exports: [
    HeaderComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
