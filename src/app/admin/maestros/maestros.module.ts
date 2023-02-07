import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaestrosPageRoutingModule } from './maestros-routing.module';

import { MaestrosPage } from './maestros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaestrosPageRoutingModule
  ],
  declarations: [MaestrosPage]
})
export class MaestrosPageModule {}
