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
    return this.firestore.collection('clases',  ref => ref.orderBy('nombre_alumno').limit(3)).snapshotChanges();
  }
  obtenerMaestros(): Observable<any> {
    return this.firestore.collection('maestros', ref => ref.orderBy('email')).snapshotChanges();
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
export class Maestro {
  private tarjeta$ = new Subject<any>();

  constructor(private firestore: AngularFirestore) { }
  obtenerMaestros(): Observable<any> {
    return this.firestore.collection('maestros', ref => ref.orderBy('email')).snapshotChanges();
  }
}

export class Calificaciones {
  private calificacion$ = new Subject<any>();
  constructor(private firestore: AngularFirestore) { }

agregarCalificacion(calif: Calificacion): Promise<any> {
  return this.firestore.collection('calificaciones').add(calif);
}

obtenerCalificacion(): Observable<any> {
  return this.firestore.collection('calificaciones', ref => ref.orderBy('nombre_alumno')).snapshotChanges();
}

eliminarCalificacion(id: string): Promise<any> {
  return this.firestore.collection('calificaciones').doc(id).delete();
}

editarCalificacion(id: string, calif: any): Promise<any> {
  return this.firestore.collection('calificacion').doc(id).update(calif);
}

addCalificacionEdit(calif: Calificacion) {
  this.calificacion$.next(calif);
}

getCalificacionEdit(): Observable<Calificaciones> {
  return this.calificacion$.asObservable();
}
}
