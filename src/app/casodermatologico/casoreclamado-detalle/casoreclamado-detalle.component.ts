import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Caso } from '../casodermatologico-lista/caso';
import { CasoreclamadoDetalleService } from './casoreclamado-detalle.service';


@Component({
  selector: 'app-casoreclamado-detalle',
  templateUrl: './casoreclamado-detalle.component.html',
  styleUrls: ['./casoreclamado-detalle.component.css']
})
export class CasoreclamadoDetalleComponent implements OnInit {

  caso : Caso;
  diagnostico : string;
  items = ["item1", "item2", "item3", "item4", "item5"];
  resultado: string;

	responsiveOptions: any[];
  constructor(private casoreclamadoDetalleService: CasoreclamadoDetalleService) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
}



  ngOnInit() {
    this.consultarDetalleReclamadoPorId(10);
    console.log('estamos en el init del detalle');
  }


  consultarDetalleReclamadoPorId(idcaso: number): void {
    this.casoreclamadoDetalleService.getCasoDetalleId(idcaso)
    .subscribe(caso => this.caso = caso);
    console.log(this.caso);
  }

  actualizarDiagnostico():void{
    console.log('aguas el diagnostico')
    console.log(this.diagnostico)
    this.casoreclamadoDetalleService.actualizarDiagnosticoCaso(this.caso.id, this.diagnostico)
    .subscribe(caso => this.caso = caso);
    console.log(this.caso);
  }


  diagnosticoform = new FormGroup({
    diagnostico: new FormControl('', [Validators.required])
     });

  submit() {
    if (this.diagnosticoform.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }




  }



