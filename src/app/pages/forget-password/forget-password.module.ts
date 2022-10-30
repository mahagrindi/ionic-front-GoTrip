import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgetPasswordPageRoutingModule } from './forget-password-routing.module';
import { SwiperModule } from 'swiper/angular';
import { ForgetPasswordPage } from './forget-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ForgetPasswordPageRoutingModule,
    SwiperModule,
  ],
  declarations: [ForgetPasswordPage],
})
export class ForgetPasswordPageModule {}
