export class Soporte {
  id : number;
  medico : number;
  tipo_soporte : string;
  institucion_educativa : string;
  nombre_programa : string;
  descripcion : string;
  graduado : Boolean;
  fecha_grado : Date;
  fecha_soporte : Date;
  validado : Boolean

  constructor(id: number, medico: number, tipo_soporte: string, institucion_educativa: string, nombre_programa: string, descripcion: string, graduado: Boolean, fecha_grado: Date, fecha_soporte: Date, validado: Boolean) {
    this.id = id;
    this.medico = medico;
    this.tipo_soporte = tipo_soporte;
    this.institucion_educativa = institucion_educativa;
    this.nombre_programa = nombre_programa;
    this.descripcion = descripcion;
    this.graduado = graduado;
    this.fecha_grado = fecha_grado;
    this.fecha_soporte = fecha_soporte;
    this.validado = validado;
  }
}
