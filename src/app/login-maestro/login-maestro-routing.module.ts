import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginMaestroPage } from './login-maestro.page';

const routes: Routes = [
  {
    path: '',
    component: LoginMaestroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginMaestroPageRoutingModule {}
