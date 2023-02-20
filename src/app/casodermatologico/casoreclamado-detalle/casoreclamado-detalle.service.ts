import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Caso } from '../casodermatologico-lista/caso';
import { HttpClient } from '@angular/common/http';
import { CASOS } from '../casodermatologico-lista/mock-casos';
import {environment} from "../../../environments/environment";
import { Diagnostico } from './diagnostico';

@Injectable({
  providedIn: 'root'
})
export class CasoreclamadoDetalleService {

  urlPaciente: string = environment.urlPaciente;
  urlCasoMedico: string = environment.urlMedico;

constructor(private http: HttpClient) { }


getReclamadosDetalle(identificadorpacinete: number): Observable<Caso>{
  return this.http.get<Caso>(this.urlPaciente+identificadorpacinete+'/casos-medicos/');
}



actualizarDiagnosticoCaso(identificadorcaso: number ,
   identificadormedico : number ,diagnostico: string,
   aceptado:boolean, fecha_acepta:string, ob:Diagnostico ): Observable<any> {

    var parametros  =  '{"caso": ' + identificadorcaso +
    ', "fecha_diagnostico": "' + fecha_acepta +
    '", "descripcion": "' + diagnostico +
    '", "medico": ' + identificadormedico +
    ', "aceptado": '+ aceptado +
    ', "fecha_acepta": "' + fecha_acepta+ '"} ';

  return this.http.post(this.urlCasoMedico+identificadormedico+'/casos-medicos/'+identificadorcaso+'/diagnosticar/', ob);
}

}
