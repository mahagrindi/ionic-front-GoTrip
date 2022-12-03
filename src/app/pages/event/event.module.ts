import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventPageRoutingModule } from './event-routing.module';

import { EventPage } from './event.page';
import { SwiperModule } from 'swiper/angular';
import { AlertModalComponent } from 'src/app/alert-modal/alert-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EventPageRoutingModule,
    SwiperModule,
  ],
  declarations: [EventPage,AlertModalComponent]
})
export class EventPageModule {}
