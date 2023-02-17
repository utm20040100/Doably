import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { Clases } from '../models/user';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class Clase {
  private tarjeta$ = new Subject<any>();

  constructor(private firestore: AngularFirestore) { }

  agregarTarjeta(tarjeta: Clases): Promise<any> {
    return this.firestore.collection('clases').add(tarjeta);
  }

  obtenerTarjetas(): Observable<any> {
    return this.firestore.collection('clases', ref => ref.orderBy('fecha', 'asc')).snapshotChanges();
  }

  eliminarTarjeta(id: string): Promise<any> {
    return this.firestore.collection('clases').doc(id).delete();
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
