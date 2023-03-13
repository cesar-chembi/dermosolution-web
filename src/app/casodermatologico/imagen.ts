export class Imagen {
  id: number;
  seguimiento: number;
  url:string ;
  descripcion: string;
  fecha_creacion: Date;

  constructor(id: number, seguimiento : number, url : string,   descripcion : string, fecha_creacion : Date) {
    this.id = id;
    this.seguimiento = seguimiento;
    this.url = url;
    this.descripcion = descripcion;
    this.fecha_creacion = fecha_creacion;
  }
}
