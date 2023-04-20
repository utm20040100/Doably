import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { Clases, Calificacion } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class Maestro {
  private tarjeta$ = new Subject<any>();

  constructor(private firestore: AngularFirestore) { }

  obtenerMaestros(): Observable<any> {
    return this.firestore.collection('maestros', ref => ref.orderBy('email')).snapshotChanges();
  }

  addTarjetaEdit(tarjeta: Maestro) {
    this.tarjeta$.next(tarjeta);
  }

  getTarjetaEdit(): Observable<Maestro> {
    return this.tarjeta$.asObservable();
  }
}
