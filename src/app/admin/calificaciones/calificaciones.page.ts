import { AuthService } from '../../services/auth.service';
import { Calificacion } from '../../models/user';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Calificaciones} from 'src/app/services/tarjeta.service';


@Component({
  selector: 'app-admin',
  templateUrl: './calificaciones.page.html',
  styleUrls: ['./calificaciones.page.scss'],
})
export class CalificacionesPage implements OnInit {
  listTarjetas: Calificacion[] = [];
  form: FormGroup;
    loading = false;
    titulo = 'Agregar Tarjeta';
    id: string | undefined;
  user$: Observable<User> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService,
    private fb: FormBuilder,
              private _tarjetaService: Calificaciones) {
    this.form = this.fb.group({
      nombre_alumno: ['{{user.displayName}}', []],
      nivelIngles: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      fecha: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      calificacion: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
    })
   }

   ngOnInit(): void {
      this.obtenerCalificacion();
  }   
  
   agregarCalificacion() {
    const TARJETA: Calificacion = {
      nombre_alumno: this.form.value.nombre_alumno,
      nivelIngles: this.form.value.nivelIngles,
      fecha: this.form.value.fecha,
      calificacion: this.form.value.calificacion,
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
  obtenerCalificacion() {
    this._tarjetaService. obtenerCalificacion().subscribe(doc => {
      this.listTarjetas = [];
      doc.forEach((element: any) => {
        this.listTarjetas.push({
          display_Name: element.payload.doc.nombre_alumno,
          ...element.payload.doc.data()
        });
      });
      console.log(this.listTarjetas);
    })
  }
    
  }
