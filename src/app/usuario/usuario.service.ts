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

  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(username: string, password: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    var parametros  =  '{"username": "' + username +
    '", "password": "' + password+ '"} ';
   console.log(parametros);

    return this.http.post<any>(this.urlLogin, parametros, httpOptions);
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

}
