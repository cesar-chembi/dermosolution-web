import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Medico} from "./medico";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  urlMedico: string = 'http://localhost:8000/api/v1/medicos/';
  constructor(private http: HttpClient) { }
  crear(medico: Medico): Observable<any>{
    return this.http.post<any>(this.urlMedico, medico).pipe();
  }
}
