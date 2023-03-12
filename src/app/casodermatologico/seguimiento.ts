export class Seguimiento {
  id: number;
  tratamiento: number;
  mensaje_paciente: string;
  fecha_msg_paciente: Date;
  mensaje_medico: string;
  fecha_msg_medico: Date;
  detalle: string;

  constructor(id: number, tratamiento : number, mensaje_paciente : string,   fecha_msg_paciente : Date, mensaje_medico : string,
              fecha_msg_medico : Date,  detalle :string) {
    this.id = id;
    this.tratamiento = tratamiento;
    this.mensaje_paciente = mensaje_paciente;
    this.fecha_msg_paciente = fecha_msg_paciente;
    this.mensaje_medico = mensaje_medico;
    this.fecha_msg_medico = fecha_msg_medico;
    this.detalle = detalle;

  }
}
