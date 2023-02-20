export class Diagnostico {

    caso: number;
    fecha_diagnostico:string;
    descripcion:string;
    medico: number;
    aceptado:boolean;
    fecha_acepta: string;

    constructor(caso: number, fecha_diagnostico:string,
      descripcion:string, medico: number, aceptado:boolean,  fecha_acepta: string )
{
    this.aceptado = aceptado;
    this.caso = caso;
    this.fecha_diagnostico = fecha_diagnostico;
    this.descripcion = descripcion;
    this.medico = medico;
    this.fecha_acepta = fecha_acepta;

}

}
