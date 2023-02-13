import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Caso } from '../casodermatologico-lista/caso';
import { CasoreclamadoDetalleService } from './casoreclamado-detalle.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Message,MessageService} from 'primeng/api';


@Component({
  selector: 'app-casoreclamado-detalle',
  templateUrl: './casoreclamado-detalle.component.html',
  styleUrls: ['./casoreclamado-detalle.component.css']
})
export class CasoreclamadoDetalleComponent implements OnInit {

  msgs2: Message[];

  caso : Caso;
  diagnostico : string;
  items = ["item1", "item2", "item3", "item4", "item5"];
  resultado: string;

	responsiveOptions: any[];
  constructor(private casoreclamadoDetalleService: CasoreclamadoDetalleService,
     private route: ActivatedRoute
    ) {
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

    let id = this.route.snapshot.paramMap.get('id')!;
    let idpaciente = this.route.snapshot.paramMap.get('idpaciente')!;
    this.consultarDetalleReclamadoPorId(parseInt(id),parseInt(idpaciente));
    console.log('estamos en el init del detalle');
  }



  consultarDetalleReclamadoPorId(identificadorcaso: number, identificadorpaciente: number): void {
    this.casoreclamadoDetalleService.getReclamadosDetalle(identificadorpaciente).subscribe(
       casos => {
        this.caso = casos[0];
      }
       );

       console.log(this.caso[0]);
    }


  actualizarDiagnostico():void{
    console.log('aguas el diagnostico')
    console.log(this.diagnostico)
    this.casoreclamadoDetalleService.actualizarDiagnosticoCaso(this.caso.id, this.diagnostico)
    .subscribe(rta => {
      console.log(rta)
        if (rta == null){

        this.msgs2 = [({severity:'success',
        summary:'Success', detail:'El diagnostico medico se registro correctamente'})];


      }else{

        this.msgs2 = [(
           {severity:'error', summary:'Error',
           detail:'No fue posible registrar el diagnostico del caso medico, intenta de nuevo'})];

      }

  });
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



