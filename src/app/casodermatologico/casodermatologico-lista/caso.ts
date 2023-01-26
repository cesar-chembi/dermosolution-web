import { Paciente } from "./paciente";

export interface Caso {
  id: number;
  fecharegistro: string;
  paciente:Paciente;
  descripcion:string;
  estado:string;
}
