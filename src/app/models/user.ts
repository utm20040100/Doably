export interface Roles {
  editor?: boolean;
  admin?: boolean;
}

export interface UserInterface {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  photoUrl?: string;
  roles: Roles;
}
export class Clases {
  id?: string;
  alumno: string;
  nivelIngles: string;
  fecha: string;
  fechaCreacion: Date;
  fechaActualizacion: Date;
  hora: string;

  constructor(alumno: string, nivelIngles: string, fecha: string, nivel_ingles: string, hora: string) {
      this.alumno = alumno;
      this.nivelIngles = nivelIngles;
      this.fecha = fecha;
      this.hora = hora;
      this.fechaCreacion = new Date();
      this.fechaActualizacion = new Date();
  }
}