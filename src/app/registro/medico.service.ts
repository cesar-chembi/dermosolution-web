import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Medico} from "./medico";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Especialidad} from "./especialidad";

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  urlMedico: string = environment.urlMedico;
  urlEspecialidad: string = environment.urlEspecialidad;
  urlEspecialidadMedico: string = environment.urlEspecialidadMedico;

  constructor(private http: HttpClient) { }

  crear(medico: Medico): Observable<any>{
    return this.http.post<any>(this.urlMedico, medico).pipe();
  }
  getListaEspecialidades(): Observable<Especialidad[]>{
    return this.http.get<Especialidad[]>(this.urlEspecialidad);
  }
  adicionaEspecialidadMedico(idMedico: number, idEspecialidad: number): Observable<any>{
    const data = {
      "medico": idMedico,
      "especialidad": idEspecialidad
    }
    return this.http.post<any>(this.urlEspecialidadMedico, data).pipe();
  }



}
