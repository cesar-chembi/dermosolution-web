import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Caso } from '../caso';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment";
import { HttpHeaders } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class CasodermatologicoDetalleService {

  urlPaciente: string = environment.urlPaciente;
  urlCasosMedicos: string = environment.urlCasosMedicos;

constructor(private http: HttpClient) { }


getReclamadosDetalle(identificadorpaciente: number): Observable<Caso>{
  return this.http.get<Caso>(this.urlPaciente+identificadorpaciente+'/casos-medicos/');
}



reclamarCaso(identificadormedico: number, identificadorcaso: number): Observable<Caso>{
  const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  var parametros  =  '{"medico": ' + identificadormedico+ '} ';
  return this.http.patch<Caso>(this.urlCasosMedicos+identificadorcaso+'/', parametros, httpOptions);
}



}
