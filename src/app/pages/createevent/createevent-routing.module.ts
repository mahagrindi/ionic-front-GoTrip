import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateeventPage } from './createevent.page';

const routes: Routes = [
  {
    path: '',
    component: CreateeventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateeventPageRoutingModule {}
