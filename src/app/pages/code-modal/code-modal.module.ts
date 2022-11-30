import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeModalPageRoutingModule } from './code-modal-routing.module';

import { CodeModalPage } from './code-modal.page';
import { NgOtpInputModule } from  'ng-otp-input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodeModalPageRoutingModule,
    NgOtpInputModule
  ],
  declarations: [CodeModalPage]
})
export class CodeModalPageModule {}
