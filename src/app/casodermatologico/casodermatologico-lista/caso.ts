import { Perfildermatologico } from "../casodermatologico-detalle/perfildermatologico";
import { Paciente } from "./paciente";
import {Fotografiacaso } from "../casodermatologico-detalle/fotografiacaso"

export interface Caso {
  id: number;
  descripcion:string | undefined;
  estado:string;
  fecha_creacion: string;
  paciente:Paciente;
  //medico: Medico;
  //perfildermatologico: Perfildermatologico;
  diagnosticos:string[];
  //fotografias: Fotografiacaso[];


}
