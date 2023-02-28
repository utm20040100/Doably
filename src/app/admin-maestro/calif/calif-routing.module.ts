import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalifPage } from './calif.page';

const routes: Routes = [
  {
    path: '',
    component: CalifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalifPageRoutingModule {}
