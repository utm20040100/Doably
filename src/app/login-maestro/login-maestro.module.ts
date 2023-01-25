import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginMaestroPageRoutingModule } from './login-maestro-routing.module';

import { LoginMaestroPage } from './login-maestro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginMaestroPageRoutingModule
  ],
  declarations: [LoginMaestroPage]
})
export class LoginMaestroPageModule {}
