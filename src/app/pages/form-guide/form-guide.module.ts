import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormGuidePageRoutingModule } from './form-guide-routing.module';

import { FormGuidePage } from './form-guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormGuidePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [FormGuidePage],
})
export class FormGuidePageModule {}
