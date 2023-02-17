export interface User {
  uid: string;
  email: string;
  displayName: string;
  emailVerified: boolean;
}
export class Clases {
  id?: string;
  nivelIngles: string;
  fecha: string;
  fechaCreacion: Date;
  fechaActualizacion: Date;
  hora: string;
  nombre_alumno: string


  constructor(nombre_alumno: string, nivelIngles: string, fecha: string, hora: string) {
      this.nivelIngles = nivelIngles;
      this.fecha = fecha;
      this.hora = hora;
      this.nombre_alumno = nombre_alumno;
      this.fechaCreacion = new Date();
      this.fechaActualizacion = new Date();
  }
}