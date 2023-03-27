export interface User {
  uid: string;
  email: string;
  displayName: string;
  emailVerified: boolean;
}
export class Calificacion{
  id?: string;
  listening: string;
  participation: string;
  performance: string;
  retroalimentacion: string;
  nombre_alumno: string;
  semana: string;
  constructor(semana: string, nombre_alumno: string, listening: string, participation: string, performance:string, retroalimentacion: string) {
    this.listening = listening;
    this.participation = participation;
    this.performance = performance;
    this.semana = semana;
    this.retroalimentacion = retroalimentacion;
    this.nombre_alumno = nombre_alumno;
}
}
export class Clases {
  id?: string;
  nivelIngles: string;
  fecha: string;
  fechaCreacion: Date;
  fechaActualizacion: Date;
  hora: string;
  nombre_alumno: string;
 


  constructor(nombre_alumno: string, nivelIngles: string, fecha: string, hora: string ,url: string,maestro_t: string) {
      this.nivelIngles = nivelIngles;
      this.fecha = fecha;
      this.hora = hora;
      this.nombre_alumno = nombre_alumno;
      this.fechaCreacion = new Date();
      this.fechaActualizacion = new Date();

  }
}