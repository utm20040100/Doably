import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clase} from 'src/app/services/tarjeta.service';
import { Maestro} from 'src/app/services/tarjeta.service';
import { Clases } from '../../models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './maestros.page.html',
  styleUrls: ['./maestros.page.scss'],
})
export class MaestrosPage implements OnInit {
  listTarjetas: Clases[] = [];
  listTarjetas2: Maestro[] = [];
  form: FormGroup;
    loading = false;
    titulo = 'Agregar Tarjeta';

  user$: Observable<User> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService,
    private fb: FormBuilder,
              private _tarjetaService: Clase,  private router: Router) {
    this.form = this.fb.group({
      maestro: ['{{maestros.email}}'],
      nombre_alumno: ['{{user.displayName}}'],
      nivelIngles: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      fecha: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      hora: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
    })
   }
   ngOnInit(): void {
      this.obtenerTarjetas();
      this.obtenerMaestros();
  } 


  agregarTarjeta() {
    const TARJETA: Clases = {
      nombre_alumno: this.form.value.nombre_alumno,
      nivelIngles: this.form.value.nivelIngles,
      fecha: this.form.value.fecha,
      hora: this.form.value.hora,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date(),
      maestro: this.form.value.maestro,
      completed: false,
    }

    this.loading = true;
    this._tarjetaService.agregarTarjeta(TARJETA).then(() => {
      this.loading = false;
      console.log('tarjeta registrada');
      this.form.reset();
    }, error => {
      this.loading = false;
      console.log(error);
    })
  }
  obtenerMaestros() {
    this._tarjetaService.obtenerMaestros().subscribe(doc => {
      this.listTarjetas2 = [];
      doc.forEach((element: any) => {
        this.listTarjetas2.push({
          display_Name: element.payload.doc.nombre_alumno,
          ...element.payload.doc.data()
        });
      });
      console.log(this.listTarjetas2);
    })
  }
   obtenerTarjetas() {
      this._tarjetaService.obtenerTarjetas().subscribe(doc => {
        this.listTarjetas = [];
        doc.forEach((element: any) => {
          this.listTarjetas.push({
            ...element.payload.doc.data()
          });
        });
        console.log(this.listTarjetas);
      })
    }
  }
  
  
   
