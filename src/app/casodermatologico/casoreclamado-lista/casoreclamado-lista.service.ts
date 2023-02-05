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

getReclamados1(identificadormedico: string): Observable<Caso[]>{
  return this.http.get<Caso[]>('http://127.0.0.1:8000/api/v1/medicos/'+identificadormedico+'/casos-medicos/');
}

}
