import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieComponent } from './components/movie.component';
import { AboutComponent } from './components/about.component';

const appRoutes: Routes = [
  {
    path:'',
    component: MovieComponent
  },
  {
    path:'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
