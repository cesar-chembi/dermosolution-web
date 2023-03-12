import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Seguimiento} from "./seguimiento";
import {Imagen} from "./imagen";
import {Soporte} from "../academica/soporte";

@Injectable({
  providedIn: 'root'
})
export class SeguimientoService {
  urlSeguimientosMedico: string = environment.urlSeguimientosMedico;
  urlSeguimientosImagenes: string = environment.urlSeguimientosImagenes;
  urlSeguimientos: string = environment.urlSeguimientos;

  constructor(private http: HttpClient) { }

  getListaSeguimientosMedico(idmedico: number): Observable<Seguimiento[]>{
    return this.http.get<Seguimiento[]>(this.urlSeguimientosMedico+idmedico+"/");
  }
  getListImagenes(idseguimiento: number): Observable<Imagen[]>{
    return this.http.get<Imagen[]>(this.urlSeguimientosImagenes+idseguimiento+"/");
  }
  actualizarSeguimiento(seguimiento: Seguimiento): Observable<any>{
    return this.http.put<any>(this.urlSeguimientos, seguimiento).pipe();
  }

}
