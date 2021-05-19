import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'from',
    loadChildren: () => import('./from/from.module').then( m => m.FromPageModule)
  },
  {
    path: 'know',
    loadChildren: () => import('./know/know.module').then( m => m.KnowPageModule)
  },
  {
    path: 'con',
    loadChildren: () => import('./con/con.module').then( m => m.ConPageModule)
  },
  {
    path: 'cal',
    loadChildren: () => import('./cal/cal.module').then( m => m.CalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
