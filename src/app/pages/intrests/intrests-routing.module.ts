import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntrestsPage } from './intrests.page';

const routes: Routes = [
  {
    path: '',
    component: IntrestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntrestsPageRoutingModule {}
