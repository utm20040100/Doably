export class TarjetaCredito {
    id?: string;
    alumno: string;
    nivelIngles: string;
    hora: string;
    fecha: string;
    fechaCreacion: Date;
    fechaActualizacion: Date;

    constructor(alumno: string, nivelIngles: string, hora:string) {
        this.alumno = alumno;
        this.nivelIngles = nivelIngles;
        this.hora = hora;
        this.fechaCreacion = new Date();
        this.fechaActualizacion = new Date();
    }
}