import { Component, OnInit } from '@angular/core';
import { Caso } from '../casodermatologico-lista/caso';
import { CasoreclamadoListaService } from '../casoreclamado-lista/casoreclamado-lista.service';
import {Casobusqueda} from './casobusqueda';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface Pais {
  nombre: string,
  codigo: string
}

interface Sexo {
  codigo: string,
  nombre: string
}

@Component({
  selector: 'app-casoreclamado-lista',
  templateUrl: './casoreclamado-lista.component.html',
  styleUrls: ['./casoreclamado-lista.component.css']
})
export class CasoreclamadoListaComponent implements OnInit {

  casos: Caso[] = [];
  loading: boolean = false;
  nacionalidad: string;
  sexo: string;
  listapaises: Pais[];
  listasexo: Sexo[];
  descripcion:string;
  ffinal:string;
  nombre:string;
  finicial:string;
  edad:string;
  resultado: string;

  constructor(private casoreclamadoListaService: CasoreclamadoListaService, public router: Router) {

    this.listasexo = [
      {nombre: 'Femenino', codigo: '0'},
      {nombre: 'Masculino', codigo: '1'}

    ]


    this.listapaises = [
      {nombre: 'Australia', codigo: 'AU'},
      {nombre: 'Brazil', codigo: 'BR'},
      {nombre: 'China', codigo: 'CN'},
      {nombre: 'Egypt', codigo: 'EG'},
      {nombre: 'France', codigo: 'FR'},
      {nombre: 'Germany', codigo: 'DE'},
      {nombre: 'India', codigo: 'IN'},
      {nombre: 'Japan', codigo: 'JP'},
      {nombre: 'Spain', codigo: 'ES'},
      {nombre: 'United States', codigo: 'US'}
  ];

  }


  ngOnInit() {
    this.getCasosReclamados('10');
  }


  filtroform = new FormGroup({
    edad: new FormControl('', [Validators.min(0),  Validators.max(100)]),
    ffinal: new FormControl('', []),
    finicial: new FormControl('', []),
    nombre: new FormControl('', []),
    nacionalidad: new FormControl('', []),
    sexo: new FormControl('', []),
    descripcion: new FormControl('', [])


  });

  submit() {
    if (this.filtroform.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }


  valueChangeNacionalidad(event:any){
    this.nacionalidad = event.target.value;
  }


  valueChangeSexo(event:any){
    this.sexo = event.target.value;
  }


  nuevaConsultar(){
    this.ngOnInit();
    //this.casostemp = [];
  }

  consultar() {
    const parametros = {finicial: this.finicial, nombre: this.nombre,
      edad: this.edad, ffinal: this.ffinal,
      nacionalidad: this.nacionalidad, sexo: this.sexo,
      descripcion: this.descripcion
    };

console.log(parametros);
    this.casoreclamadoListaService.getReclamadosFiltros(parametros).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/');
      },
      error => {
        console.log(error);
      });
  }



  getCasosReclamados(identificador: string): void {
    this.casoreclamadoListaService.getReclamados(identificador)
    .subscribe(casos => this.casos = casos);
  }

}
