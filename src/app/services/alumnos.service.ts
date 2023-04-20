import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { Clases, Calificacion } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class Clase {
  private tarjeta$ = new Subject<any>();

  constructor(private firestore: AngularFirestore) { }

  agregarTarjeta(tarjeta: Clases): Promise<any> {
    return this.firestore.collection('clases').add(tarjeta);
  }
  agregarCalificacion(tarjeta: Clases): Promise<any> {
    return this.firestore.collection('calificaciones').add(tarjeta);
  }

  obtenerTarjetas(): Observable<any> {
    return this.firestore.collection('users', ref => ref.orderBy('displayName')).snapshotChanges();
  }
  eliminarTarjeta(id: string): Promise<any> {
    return this.firestore.collection('clases').doc(id).delete();
  }
  obtenerAlumnos(): Observable<any> {
    return this.firestore.collection('users', ref => ref.orderBy('displayName')).snapshotChanges();
  }
  editarTarjeta(id: string, tarjeta: any): Promise<any> {
    return this.firestore.collection('clases').doc(id).update(tarjeta);
  }

  addTarjetaEdit(tarjeta: Clases) {
    this.tarjeta$.next(tarjeta);
  }

  getTarjetaEdit(): Observable<Clases> {
    return this.tarjeta$.asObservable();
  }
}

