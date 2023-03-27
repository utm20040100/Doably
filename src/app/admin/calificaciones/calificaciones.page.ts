import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Calificaciones} from 'src/app/services/calificaciones.service';
import {User, Calificacion } from '../../models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './calificaciones.page.html',
  styleUrls: ['./calificaciones.page.scss'],
})
export class CalificacionesPage implements OnInit {
  listTarjetas: Calificaciones[] = [];
  form: FormGroup;
    loading = false;
    titulo = 'Agregar Tarjeta';
    id: string | undefined;
    user$: Observable<User> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService,
    private fb: FormBuilder,
              private _tarjetaService: Calificaciones) {
    this.form = this.fb.group({
      nombre_alumno: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      semana: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      participation: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      listening: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      performance: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      retroalimentacion: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
    })
   }
   ngOnInit(): void {
    this._tarjetaService.getCalificacionesEdit().subscribe(data => {
      this.id = data.id;
      this.titulo = 'Editar Tarjeta';
      this.form.patchValue({
        nombre_alumno: data.nombre_alumno,
        semana: data.semana,
        listenig: data.listening,
        participation: data.participation,
        performance: data.performance,
        retroalimentacion: data.retroalimentacion,
      })
    })
      this.obtenerCalificaciones();
  }



  agregarCalificacion() {
    const TARJETA: Calificacion = {
      nombre_alumno: this.form.value.nombre_alumno,
      semana: this.form.value.semana,
      listening: this.form.value.listening,
      participation: this.form.value.participation,
      performance: this.form.value.performance,
      retroalimentacion: this.form.value.retroalimentacion,
  
    }

    this.loading = true;
    this._tarjetaService.agregarCalificacion(TARJETA).then(() => {
      this.loading = false;
      console.log('tarjeta registrada');
      this.form.reset();
    }, error => {
      this.loading = false;
      console.log(error);
    })
  }
  
   obtenerCalificaciones() {
      this._tarjetaService.obtenerCalificaciones().subscribe(doc => {
        this.listTarjetas = [];
        doc.forEach((element: any) => {
          this.listTarjetas.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          });
        });
        console.log(this.listTarjetas);
      })
    }
  
    eliminarTarjeta(id: any) {
      this._tarjetaService.eliminarTarjeta(id).then(() => {
      }, error => {
        console.log(error);
      })
    }

  }
  
  
   
