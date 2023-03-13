import { Component,HostBinding,Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { UsuarioService } from "./usuario/usuario.service";
import { UsuarioMenuService} from "./usuario-menu.service";


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

  username:string;
  nombre:string;


  @HostBinding('class.is-cambio')
  isCambio = false;


  constructor(private um:UsuarioMenuService, private translate: TranslateService,private router:Router, private userService: UsuarioService) {}

  ngOnInit() {
    const lang = localStorage.getItem('lang');
    this.languaje = lang ? lang : this.translate.defaultLang;
    this.translate.setDefaultLang(this.languaje);
    this.validacion = this.validateToken();
    this.um.change.subscribe(isCambio => {
      this.validacion = isCambio;
      this.recuperarInformacionUsuario();
    });



  }

  changeLanguaje() {
    this.translate.setDefaultLang(this.languaje);
    localStorage.setItem('lang', this.languaje);
  }


  eliminarToken(){

    this.userService.deleteToken();
    this.userService.deleteUser();
    this.userService.deleteName();
    this.userService.deleteIdmedico();

  }


  recuperarInformacionUsuario() {

    const token: string = this.userService.getToken();
    if (token) {
          this.username = this.userService.getUser();
          this.nombre = this.userService.getName();

      }
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
