import { AuthService } from '../../services/auth.service';
import { User, Calificacion } from '../../models/user';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clase} from 'src/app/services/alumnos.service';
import { Clases } from '../../models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './calificar-alumno.page.html',
  styleUrls: ['./calificar-alumno.page.scss'],
})
export class CalificarAlumnoPage implements OnInit {
  listTarjetas: Calificacion[] = [];
  form: FormGroup;
    loading = false;
    titulo = 'Agregar Tarjeta';
    id: string | undefined;
  user$: Observable<User> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService,
    private fb: FormBuilder,
              private _tarjetaService: Clase) {
    this.form = this.fb.group({
      nombre_alumno: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      nivelIngles: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      fecha: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      hora: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
    })
   }
   ngOnInit(): void {
    this._tarjetaService.getTarjetaEdit().subscribe(data => {
      this.id = data.id;
      this.titulo = 'Editar Tarjeta';
      this.form.patchValue({
        nivelIngles: data.nivelIngles,
        fecha: data.fecha,
        hora: data.hora,
      })
    })
      this.obtenerTarjetas();
  }


  editarTarjeta(id: string) {
    const TARJETA: any = {
      nivelIngles: this.form.value.nivelIngles,
      fecha: this.form.value.fecha,
      fechaActualizacion: new Date(),
    }
    this.loading = true;
    this._tarjetaService.editarTarjeta(id, TARJETA).then(() =>{
      this.loading = false;
      this.titulo = 'Agregar Tarjeta';
      this.form.reset();
      this.id = undefined
    }, error => {
      console.log(error);
    })
  }

  agregarCalificacion() {
    const TARJETA: Clases = {
      nombre_alumno: this.form.value.nombre_alumno,
      nivelIngles: this.form.value.nivelIngles,
      fecha: this.form.value.fecha,
      hora: this.form.value.hora,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date(),
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
  
   obtenerTarjetas() {
      this._tarjetaService.obtenerTarjetas().subscribe(doc => {
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
  
  
   
