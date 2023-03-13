import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UsuarioService } from "../usuario/usuario.service";
import { Router } from '@angular/router';
import { UsuarioMenuService } from "../usuario-menu.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo: string;
  contrasena: string;


  resultado: string;

  constructor(private translateService: TranslateService, public router: Router,
    private route: ActivatedRoute, private userService :UsuarioService,
    private usuarioMenuService :UsuarioMenuService) {
    let selectedLanguage =  this.route.snapshot.paramMap.get('lang');

  }


  login() {

    this.userService.login(this.correo, this.contrasena).subscribe(
      data => {
        this.userService.setToken(data.token);
        this.userService.setIdmedico(data.id);
        this.userService.setUser(data.username);
        this.userService.setName(data.fullname);
        this.usuarioMenuService.toggle();
        this.router.navigateByUrl('/academica')
      },
      error => {
        console.log(error);
      });
  }



  loginform = new FormGroup({
    contrasena: new FormControl('', [Validators.minLength(10),  Validators.required]),
    correo: new FormControl('', [Validators.required, Validators.email])
  });

  submit() {
    if (this.loginform.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }



  selectLanguage(lang: string) {
      this.translateService.use(lang);
  }



  ngOnInit() {
  }

}
