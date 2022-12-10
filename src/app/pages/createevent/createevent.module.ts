import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateeventPageRoutingModule } from './createevent-routing.module';
import { SwiperModule } from 'swiper/angular';

import { CreateeventPage } from './createevent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule ,
    CreateeventPageRoutingModule,
    SwiperModule,
  ],
  declarations: [CreateeventPage]
})
export class CreateeventPageModule {}
