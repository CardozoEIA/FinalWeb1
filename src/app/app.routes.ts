import { Routes } from '@angular/router';


export const routes: Routes = [{
    path: '',
    
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.routes').then((m) => m.PagesRoutes),
      },
      {
        path:'houses',
        loadChildren: ()=>
          import('./pages/house/house.routes').then((m) => m.HouseRoutes)
      },
      {
        path:'characters',
        loadChildren: ()=>
          import('./pages/character/character.routes').then((m) => m.CharacterRoutes)
      }
      
    ],

  }];
