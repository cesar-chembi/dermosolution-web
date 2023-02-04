import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Caso } from '../casodermatologico-lista/caso';
import { CASOS } from '../casodermatologico-lista/mock-casos';

@Injectable({
  providedIn: 'root'
})
export class CasoreclamadoListaService {

constructor(private http: HttpClient) { }



getReclamadosFiltros(parametros: any): Observable<any> {

  return this.http.post("https://reqres.in/api/login", parametros);

}

getReclamados(identificadormedico: string): Observable<Caso[]> {
  const casos = of(CASOS);
  return casos;
}




}
