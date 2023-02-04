import { Perfildermatologico } from "../casodermatologico-detalle/perfildermatologico";
import { Paciente } from "./paciente";
import {Fotografiacaso } from "../casodermatologico-detalle/fotografiacaso"

export interface Caso {
  id: number;
  fecharegistro: string;
  paciente:Paciente;
  perfildermatologico: Perfildermatologico;
  diagnostico:string;
  fotografias: Fotografiacaso[];
  descripcion:string | undefined;
  estado:string;
}
