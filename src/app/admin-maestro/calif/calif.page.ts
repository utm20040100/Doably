import { AuthService } from '../../services/auth.service';
import { User, Calificacion } from '../../models/user';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clase} from 'src/app/services/alumnos.service';
import { Clases } from '../../models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './calif.page.html',
  styleUrls: ['./calif.page.scss'],
})
export class CalifPage implements OnInit {
  listTarjetas: Calificacion[] = [];
  form: FormGroup;
    loading = false;
    titulo = 'Agregar Tarjeta';
    id: string | undefined;
  user$: Observable<User> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService,
    private fb: FormBuilder,
              private _tarjetaService: Clase) {
   }
   ngOnInit(): void { this.obtenerTarjetas();}
  
  
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
  
  }
  
  
   
