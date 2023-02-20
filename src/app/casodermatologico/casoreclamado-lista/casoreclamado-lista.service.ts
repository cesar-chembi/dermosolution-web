import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Caso } from '../casodermatologico-lista/caso';
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class CasoreclamadoListaService {

 urlMedico: string = environment.urlMedico;

constructor(private http: HttpClient) { }


getReclamados1(identificadormedico: string): Observable<Caso[]>{
  return this.http.get<Caso[]>(this.urlMedico+identificadormedico+'/casos-medicos/');
}

}
