import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { Clases, Calificacion } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class Calificaciones {
  private tarjeta$ = new Subject<any>();

  constructor(private firestore: AngularFirestore) { }

 
  agregarCalificacion(tarjeta: Calificacion): Promise<any> {
    return this.firestore.collection('calificaciones').add(tarjeta);
  }

  eliminarTarjeta(id: string): Promise<any> {
    return this.firestore.collection('clases').doc(id).delete();
  }
  obtenerCalificaciones(): Observable<any> {
    return this.firestore.collection('calificaciones', ref => ref.orderBy('semana')).snapshotChanges();
  }

  editarTarjeta(id: string, tarjeta: any): Promise<any> {
    return this.firestore.collection('clases').doc(id).update(tarjeta);
  }

  addTarjetaEdit(tarjeta: Clases) {
    this.tarjeta$.next(tarjeta);
  }

  getCalificacionesEdit(): Observable<Calificacion> {
    return this.tarjeta$.asObservable();
  }
}

