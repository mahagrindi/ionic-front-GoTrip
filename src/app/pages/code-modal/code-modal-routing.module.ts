import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeModalPage } from './code-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CodeModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeModalPageRoutingModule {}
