import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormGuidePage } from './form-guide.page';

const routes: Routes = [
  {
    path: '',
    component: FormGuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormGuidePageRoutingModule {}
