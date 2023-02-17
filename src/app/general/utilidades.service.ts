import { Injectable } from '@angular/core';
import tiposoporte from "../../assets/json/tiposoporte.json";
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
  getTiposSoporte(){
    let TiposSoporte: any = tiposoporte;
    return TiposSoporte
  }
  getPaises(){
    let Paises: any = paises;
    return Paises
  }

}
