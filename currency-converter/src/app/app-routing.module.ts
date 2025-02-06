import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'currency-converter',
    loadChildren: () => import('./currency-converter/currency-converter.module').then(m => m.CurrencyConverterModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
