export class Medico {
  id : number;
  tipoIdentificacion : string;
  numeroIdentificacion : number;
  nombres : string;
  apellidos : string;
  fecha_nacimiento : Date;
  sexo :string;
  lugar_nacimiento : string;
  lugar_residencia : string;
  numero_celular : string;
  numero_registro_profesional : string;
  correo : string;
  clave : string;
  casos_medicos:any[]
    constructor(id : number,  tipoIdentificacion : string,   numeroIdentificacion : number,   nombres : string, apellidos : string,
              fecha_nacimiento : Date,  sexo :string, lugar_nacimiento : string, lugar_residencia : string, numero_celular : string,
              numero_registro_profesional : string, correo : string, clave : string) {
    this.id = id;
    this.tipoIdentificacion = tipoIdentificacion;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.fecha_nacimiento = fecha_nacimiento;
    this.sexo = sexo;
    this.lugar_nacimiento = lugar_nacimiento;
    this.lugar_residencia =lugar_residencia;
    this.numero_celular = numero_celular;
    this.numero_registro_profesional = numero_registro_profesional;
    this.correo = correo;
    this.clave = clave;
    this.casos_medicos=[];
  }
}
