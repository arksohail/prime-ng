import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'prime-ng',
    pathMatch: 'full'
  },
  {
    path: 'prime-ng',
    loadComponent: () => import('./prime-ng/prime-ng.component').then(m => m.PrimeNgComponent)
  }
];
