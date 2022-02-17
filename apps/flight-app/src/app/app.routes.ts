import { ExtraOptions, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'passenger-mf',
    loadChildren: () => loadRemoteModule({
      type: 'module', // Ab ng 13: ESM
      remoteEntry: 'http://localhost:3000/remoteEntry.js',
      exposedModule: './Module'
    }).then(m => m.PassengerModule)
     
      //import('passenger/Module').then(m => m.PassengerModule)
  },
  {
    path: 'basket',
    component: BasketComponent,
    outlet: 'aux'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
