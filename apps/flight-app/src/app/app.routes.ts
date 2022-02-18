import { ExtraOptions, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { startsWith, WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

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
  // And this route too:
  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
        remoteEntry: 'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
        remoteName: 'react',
        exposedModule: './web-components',
        elementName: 'react-element'
    } as WebComponentWrapperOptions
  },
  // And also this route:
  {
    matcher: startsWith('angular3'),
    component: WebComponentWrapper,
    data: {
        remoteEntry: 'https://gray-river-0b8c23a10.azurestaticapps.net/remoteEntry.js',
        remoteName: 'angular3',
        exposedModule: './web-components',
        elementName: 'angular3-element'
    } as WebComponentWrapperOptions
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
