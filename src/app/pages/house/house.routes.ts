import { Routes } from '@angular/router';


import { HouseListComponent } from './house-list/house-list.component';


export const HouseRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listado',
        component: HouseListComponent,
      }
    ], 
  },
];