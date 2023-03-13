import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UsuarioService } from "../usuario/usuario.service";
import { HttpContextToken } from '@angular/common/http';

export const BYPASS_JW_TOKEN = new HttpContextToken(() => false);

@Injectable({
  providedIn: 'root'
})




export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private router: Router, private userService: UsuarioService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: string = this.userService.getToken();

    let request = req;

    if (req.context.get(BYPASS_JW_TOKEN) === true) {
      return next.handle(request)
    }
    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ token }`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {

        if (err.status === 401) {
          this.router.navigateByUrl('/login');
        }

        return throwError( err );

      })
    );


  }

}

