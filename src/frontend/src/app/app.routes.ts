import { Routes } from '@angular/router';

export const routes: Routes = [
    // whatever routes i need at the application level
   {
    path: 'demos',
    loadChildren: () => import('./demos/demos.routes').then(d => d.DEMOS_ROUTES)
   }
];
