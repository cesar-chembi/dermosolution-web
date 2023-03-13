import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";
import { HttpHeaders } from '@angular/common/http';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlLogin: string = environment.urlLogin;
  urlInfoUsuario: string = environment.urlInfoUsuario;

  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(username: string, password: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    var parametros  =  '{"username": "' + username +
    '", "password": "' + password+ '"} ';


    return this.http.post<any>(this.urlLogin, parametros, httpOptions);
  }



  recuperarInformacionUsuarioFromToken(token: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    var parametros  =  '{"token": "' + token+ '"} ';
    return this.http.post<any>(this.urlInfoUsuario, parametros, httpOptions);
  }



setToken(token: string) {
  this.cookies.set("token", token);
}
getToken() {
  return this.cookies.get("token");
}

deleteToken(){
  this.cookies.delete("token");
}



setIdmedico(idmedico: string) {
  this.cookies.set("idmedico", idmedico);
}


getIdmedico() {
  return this.cookies.get("idmedico");
}

deleteIdmedico(){
  this.cookies.delete("idmedico");
}


setUser(user: string) {
  this.cookies.set("user", user);
}


getUser() {
  return this.cookies.get("user");
}

deleteUser(){
  this.cookies.delete("user");
}


setName(name: string) {
  this.cookies.set("name", name);
}


getName() {
  return this.cookies.get("name");
}

deleteName(){
  this.cookies.delete("name");
}


}
