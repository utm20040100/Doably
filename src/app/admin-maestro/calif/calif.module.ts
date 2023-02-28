import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalifPageRoutingModule } from './calif-routing.module';

import { CalifPage } from './calif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalifPageRoutingModule
  ],
  declarations: [CalifPage]
})
export class CalifPageModule {}
