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




getCasoDetalleId(identificadorcaso: number): Observable<any> {
  const casos = of(CASOS[0]);
  return casos;
  //return this.http.post("https://reqres.in/api/login", identificadorcaso);

}


actualizarDiagnosticoCaso(identificadorcaso: number, diagnostico: string): Observable<any> {
  const casos = of(CASOS[0]);
  return casos;
  //return this.http.post("https://reqres.in/api/login", identificadorcaso);

}

}
