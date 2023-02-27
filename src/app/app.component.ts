import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { UsuarioService } from "./usuario/usuario.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dermosolutionsWeb';
  validacion : boolean = false;
 languajes = [
    {
      key: 'English',
      value: 'en',
    },
    {
      key: 'Español',
      value: 'es',
    },
  ];
  languaje: string;

  constructor(private translate: TranslateService,private router:Router, private userService: UsuarioService) {}

  ngOnInit() {
    const lang = localStorage.getItem('lang');
    this.languaje = lang ? lang : this.translate.defaultLang;
    this.translate.setDefaultLang(this.languaje);
    this.validacion = this.validateToken();
  }

  changeLanguaje() {
    this.translate.setDefaultLang(this.languaje);
    localStorage.setItem('lang', this.languaje);
  }


  eliminarToken(){

    this.userService.deleteToken();

  }


  validateToken(): boolean{

    const token: string = this.userService.getToken();
    if (token) {

     return true;
  } else{
     return false;
  }
  }
}
