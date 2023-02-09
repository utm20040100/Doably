export class TarjetaCredito {
    id?: string;
    alumno: string;
    nivelIngles: string;
    fecha: string;
    fechaCreacion: Date;
    fechaActualizacion: Date;

    constructor(alumno: string, nivelIngles: string) {
        this.alumno = alumno;
        this.nivelIngles = nivelIngles;
        this.fechaCreacion = new Date();
        this.fechaActualizacion = new Date();
    }
}