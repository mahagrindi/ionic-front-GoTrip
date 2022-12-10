import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErrorModalPageRoutingModule } from './error-modal-routing.module';

import { ErrorModalPage } from './error-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErrorModalPageRoutingModule
  ],
  declarations: [ErrorModalPage]
})
export class ErrorModalPageModule {}
