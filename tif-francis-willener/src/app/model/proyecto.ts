export class Proyecto {
    id?: number;
    titulo: string;
    descripcion: string;

    constructor(titulo: string, descripcion: string) {
        this.titulo = titulo;
        this.descripcion = descripcion;
    }
}
