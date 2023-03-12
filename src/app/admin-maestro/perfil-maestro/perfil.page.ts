import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clase} from 'src/app/services/tarjeta.service';
import { Clases } from '../../models/user';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  listTarjetas: Clases[] = [];
  user$: Observable<User> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService, private _tarjetaService: Clase) {}
   ngOnInit() {}

   obtenerMaestros() {
    this._tarjetaService.obtenerMaestros().subscribe(doc => {
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
