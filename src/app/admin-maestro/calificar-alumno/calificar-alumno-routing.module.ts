import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalificarAlumnoPage } from './calificar-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: CalificarAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalificarAlumnoPageRoutingModule {}
