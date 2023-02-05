import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Caso } from '../casodermatologico-lista/caso';
import { HttpClient } from '@angular/common/http';
import { CASOS } from '../casodermatologico-lista/mock-casos';


@Injectable({
  providedIn: 'root'
})
export class CasoreclamadoDetalleService {

constructor(private http: HttpClient) { }


getReclamadosDetalle(identificadorpacinete: number): Observable<Caso>{
  return this.http.get<Caso>('http://127.0.0.1:8000/api/v1/pacientes/'+identificadorpacinete+'/casos-medicos/');
}



actualizarDiagnosticoCaso(identificadorcaso: number, diagnostico: string): Observable<any> {
  const casos = of(CASOS[0]);
  return casos;
  //return this.http.post("https://reqres.in/api/login", identificadorcaso);

}

}
