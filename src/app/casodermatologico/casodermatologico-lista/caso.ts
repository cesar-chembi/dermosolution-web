import { Perfildermatologico } from "../casodermatologico-detalle/perfildermatologico";
import { Paciente } from "./paciente";
import {Imagenesdiagnosticas } from "../casodermatologico-detalle/imagenesdiagnosticas"

export interface Caso {
  id: number;
  descripcion:string | undefined;
  estado:string;
  fecha_creacion: string;
  paciente:Paciente;
  tipo:  string;
  forma: string;
  numero: string;
  distribucion: string;
  color: string;
  //medico: Medico;
  //perfildermatologico: string;
  diagnosticos:string[];

  imagenes: Imagenesdiagnosticas[];

}
