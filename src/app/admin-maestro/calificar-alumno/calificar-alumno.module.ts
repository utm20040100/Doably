import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalificarAlumnoPageRoutingModule } from './calificar-alumno-routing.module';

import { CalificarAlumnoPage } from './calificar-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    CalificarAlumnoPageRoutingModule
  ],
  declarations: [CalificarAlumnoPage]
})
export class CalificarAlumnoPageModule {}
