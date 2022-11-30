import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorModalPage } from './error-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ErrorModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorModalPageRoutingModule {}
