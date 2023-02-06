import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Caso } from '../casodermatologico-lista/caso';
import { HttpClient } from '@angular/common/http';
import { CASOS } from '../casodermatologico-lista/mock-casos';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CasoreclamadoDetalleService {

  urlPaciente: string = environment.urlPaciente;
  urlCasoMedico: string = environment.urlPaciente;

constructor(private http: HttpClient) { }


getReclamadosDetalle(identificadorpacinete: number): Observable<Caso>{
  return this.http.get<Caso>(this.urlPaciente+identificadorpacinete+'/casos-medicos/');
}



actualizarDiagnosticoCaso(identificadorcaso: number, diagnostico: string): Observable<any> {
 // return this.http.post(this.urlCasoMedico, identificadorcaso);

  return this.http.get<Caso>(this.urlPaciente+identificadorcaso+'/casos-medicos/');

}

}
