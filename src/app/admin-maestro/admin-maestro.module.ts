import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminMaestroPageRoutingModule } from './admin-maestro-routing.module';

import { AdminMaestroPage } from './admin-maestro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminMaestroPageRoutingModule
  ],
  declarations: [AdminMaestroPage]
})
export class AdminMaestroPageModule {}
