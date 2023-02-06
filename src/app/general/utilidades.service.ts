import { Injectable } from '@angular/core';
import tiposdocumento from "../../assets/json/tiposdocumento.json";
import paises from "../../assets/json/paises.json";

@Injectable({
  providedIn: 'root'
})
export class UtilidadesService {

  constructor() { }

  getTiposDocumento(){
    let TiposDocumento: any = tiposdocumento;
    return TiposDocumento
  }
  getPaises(){
    let Paises: any = paises;
    return Paises
  }

}
