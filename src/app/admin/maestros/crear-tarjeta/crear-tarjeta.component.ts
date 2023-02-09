import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clases } from 'src/app/models/user';
import { Clase} from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})
export class CrearTarjetaComponent implements OnInit {
  form: FormGroup;
  loading = false;
  titulo = 'Agregar Tarjeta';
  id: string | undefined;

  constructor(private fb: FormBuilder,
              private _tarjetaService: Clase) {
    this.form = this.fb.group({
      alumno: ['', Validators.required],
      nivelIngles: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fecha: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    })
   }

  ngOnInit(): void {
    this._tarjetaService.getTarjetaEdit().subscribe(data => {
      this.id = data.id;
      this.titulo = 'Editar Tarjeta';
      this.form.patchValue({
        alumno: data.alumno,
        nivelIngles: data.nivelIngles,
        fecha: data.fecha
      })
    })
  }

  guardarTarjeta() {

    if(this.id === undefined) {
      // Creamos una nueva tarjeta
      this.agregarTarjeta();

    } else {
      // Editamos una nueva tarjeta
      this.editarTarjeta(this.id);
    }
    
  }

  editarTarjeta(id: string) {
    const TARJETA: any = {
      titular: this.form.value.titular,
      numeroTarjeta: this.form.value.numeroTarjeta,
      fechaExpiracion: this.form.value.fechaExpiracion,
      cvv: this.form.value.cvv,
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

  agregarTarjeta() {
    const TARJETA: Clases = {
      alumno: this.form.value.alumno,
      nivelIngles: this.form.value.nivelIngles,
      fecha: this.form.value.fecha,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date(),
    }

    this.loading = true;
    this._tarjetaService.guardarTarjeta(TARJETA).then(() => {
      this.loading = false;
      console.log('tarjeta registrado');
      this.form.reset();
    }, error => {
      this.loading = false;
      console.log(error);
    })
  }

}
