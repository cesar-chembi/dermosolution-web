import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from "../usuario/usuario.service";

@Injectable({
  providedIn: 'root'
})
export class ValidadorAccesoGuard implements CanActivate {



  constructor(private router:Router, private userService: UsuarioService){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

     const token: string = this.userService.getToken();
      if (token) {
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }


  }

}




