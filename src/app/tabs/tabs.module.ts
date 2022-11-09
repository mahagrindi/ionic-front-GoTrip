import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { NavbarComponent } from '../components/navbar/navbar.component';

import { TabsPageRoutingModule } from './tabs-routing.module';
import { ShareModule } from '../modules/share/share.module';
import { TabsPage } from './tabs.page';
import { ContainerComponent } from './container/container.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    ShareModule,
  ],
  declarations: [TabsPage, ContainerComponent],
})
export class TabsPageModule {}
