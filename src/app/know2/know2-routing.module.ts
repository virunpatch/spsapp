import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Know2Page } from './know2.page';

const routes: Routes = [
  {
    path: '',
    component: Know2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Know2PageRoutingModule {}
