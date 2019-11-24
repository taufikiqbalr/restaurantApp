import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecreationsPage } from './recreations.page';

const routes: Routes = [
  {
    path: '',
    component: RecreationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecreationsPageRoutingModule {}
