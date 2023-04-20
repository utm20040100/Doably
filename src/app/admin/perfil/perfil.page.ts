import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clase} from 'src/app/services/tarjeta.service';
import { Clases } from '../../models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  async onSendLink(): Promise<void> {
    try {
      await this.authSvc.sendVerifcationClass();
    } catch (error) {
      console.log('Error->', error);
    }
  }
  listTarjetas: Clases[] = [];
  form: FormGroup;
    loading = false;
    titulo = 'Agregar Tarjeta';
    id: string | undefined;
  user$: Observable<User> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService,
    private fb: FormBuilder,
              private _tarjetaService: Clase,  private router: Router) {
    this.form = this.fb.group({
      nombre_alumno: ['{{user.displayName}}', []],
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

  obtenerMaestros() {
    this._tarjetaService.obtenerTarjetas().subscribe(doc => {
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

  
   obtenerTarjetas() {
      this._tarjetaService.obtenerTarjetas().subscribe(doc => {
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
    obtenerAlumnos() {
      this._tarjetaService.obtenerAlumnos().subscribe(doc => {
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
  
  
   
