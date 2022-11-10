import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntrestsPageRoutingModule } from './intrests-routing.module';

import { IntrestsPage } from './intrests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntrestsPageRoutingModule
  ],
  declarations: [IntrestsPage]
})
export class IntrestsPageModule {
}
