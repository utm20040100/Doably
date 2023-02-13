export interface User {
  uid: string;
  email: string;
  displayName: string;
  emailVerified: boolean;
}
export class Clases {
  id?: string;
  alumno: string;
  nivelIngles: string;
  fecha: string;
  hora: string;
  fechaCreacion: Date;
  fechaActualizacion: Date;

  constructor(alumno: string, nivelIngles: string, fecha: string, hora: string) {
      this.alumno = alumno;
      this.nivelIngles = nivelIngles;
      this.fecha = fecha;
      this.hora = hora;
      this.fechaCreacion = new Date();
      this.fechaActualizacion = new Date();
  }
}