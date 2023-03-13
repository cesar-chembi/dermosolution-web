import { Component, OnInit } from '@angular/core';
import { Caso } from '../caso';
import { CasoreclamadoListaService } from '../casoreclamado-lista/casoreclamado-lista.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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
  casostemp: Caso[] = [];
  casosfinal: Caso[] = [];
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

  constructor(private casoreclamadoListaService: CasoreclamadoListaService,
    private route: ActivatedRoute,
    public router: Router) {

    this.listasexo = [
      {nombre: 'MUJER', codigo: 'MUJER'},
      {nombre: 'HOMBRE', codigo: 'HOMBRE'}

    ]

    this.listapaises = [
      {nombre: 'Colombia', codigo: 'Colombia'},
      {nombre: 'Peru', codigo: 'Peru'},
      {nombre: 'Argentina', codigo: 'Argentina'},
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
    let id = this.route.snapshot.paramMap.get('id')!;
    this.getCasosReclamados('1');
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

      this.casostemp = [];
    }

      consultar() {
        const parametros = {finicial: this.finicial, nombre: this.nombre,
          edad: this.edad, ffinal: this.ffinal,
          nacionalidad: this.nacionalidad, sexo: this.sexo,
          descripcion: this.descripcion
        };

        this.casostemp = this.casos;
        this.casos = [];
        let startDate;
        let endDate;
        let casosFecha;
        let casosEdad;
        let casosNacionalidad;
        let casosSexo;
        let casosNombre;
        let casosDescripcion;

        if(this.nombre  !== undefined){
          casosNombre = this.casostemp.filter(caso => caso.paciente.nombres.match(this.nombre));

        }

        if(this.edad !== undefined){
          casosEdad = this.casostemp.filter(c => c.paciente.edad == parseInt(this.edad));

        }


        if(this.nacionalidad !== undefined){
          casosNacionalidad = this.casostemp.filter(c => c.paciente.lugar_nacimiento == this.nacionalidad);

        }

        if(this.sexo !== undefined){
          casosSexo = this.casostemp.filter(c => c.paciente.sexo == this.sexo);

        }

        if(this.descripcion !== undefined){
          casosDescripcion = this.casostemp.filter(c => c.descripcion == this.descripcion);

        }


        if(this.finicial !== undefined && this.ffinal !== undefined){
         startDate = new Date(this.finicial);
         endDate = new Date(this.ffinal);
         //let casosFecha = this.casostemp.filter(c => new Date(c.fecharegistro) > startDate && new Date(c.fecharegistro) < endDate);
         //this.casos.concat(casosFecha);
        }

        this.casos =casosNombre.concat(casosEdad).concat(casosNacionalidad).concat(casosSexo).concat(casosDescripcion)
        this.casostemp = [];

  }


  getCasosReclamados(identificadormedico: string): void {
    this.casoreclamadoListaService.getReclamados1(identificadormedico).subscribe(
       casos => {
        this.casos = casos;
      }
       );
    }



}
