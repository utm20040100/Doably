import { Component, OnInit } from '@angular/core';
import { Clases } from 'src/app/models/user';
import { Clase} from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-listar-tarjeta',
  templateUrl: './listar-tarjeta.component.html',
  styleUrls: ['./listar-tarjeta.component.css']
})
export class ListarTarjetaComponent implements OnInit {
  listTarjetas: Clases[] = [];

  constructor(private _tarjetaService: Clase) { }

  ngOnInit(): void {
    this.obtenerTarjetas();
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

  editarTarjeta(tarjeta: Clases) {
    this._tarjetaService.addTarjetaEdit(tarjeta);
  }

}
