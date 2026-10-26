import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pix-transfer/pix-transfer.component').then(
        (m) => m.PixTransferComponent
      ),
  },
  {
    path: 'pix',
    loadComponent: () =>
      import('./pix-transfer/pix-transfer.component').then(
        (m) => m.PixTransferComponent
      ),
  },
];
