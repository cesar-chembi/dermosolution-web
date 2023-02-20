import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Caso } from '../casodermatologico-lista/caso';
import {environment} from "../../../environments/environment";




@Injectable({
  providedIn: 'root'
})
export class CasodermatologicoListaService {

  urlCasosMedicos: string = environment.urlCasosMedicos;

  constructor(private http: HttpClient) { }


getCreados(): Observable<Caso[]>{
  return this.http.get<Caso[]>(this.urlCasosMedicos);
}


}
