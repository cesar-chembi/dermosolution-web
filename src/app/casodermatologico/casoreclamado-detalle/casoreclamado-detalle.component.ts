import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Caso } from '../casodermatologico-lista/caso';
import { CasoreclamadoDetalleService } from './casoreclamado-detalle.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Message,MessageService} from 'primeng/api';
import { Diagnostico } from './diagnostico';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-casoreclamado-detalle',
  templateUrl: './casoreclamado-detalle.component.html',
  styleUrls: ['./casoreclamado-detalle.component.css']
})
export class CasoreclamadoDetalleComponent implements OnInit {

  msgs2: Message[];

  diagnosticoobjeto: Diagnostico;
  caso : Caso;
  diagnostico : string;
  items = ["item1", "item2", "item3", "item4", "item5"];
  resultado: string;
  aceptado : boolean = true;
  isdisable : boolean = true;
  idmedico:string;
	responsiveOptions: any[];
  pipe = new DatePipe('en-US');
  fechaActual:string;
  constructor(private casoreclamadoDetalleService: CasoreclamadoDetalleService,
     private route: ActivatedRoute, private messageService: MessageService
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

    this.idmedico = this.route.snapshot.paramMap.get('id')!;
    let idpaciente = this.route.snapshot.paramMap.get('idpaciente')!;
    this.consultarDetalleReclamadoPorId(parseInt(this.idmedico),parseInt(idpaciente));

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
    console.log(this.diagnostico)
    let date: Date = new Date();
    this.fechaActual = null;
    this.fechaActual = this.pipe.transform(Date.now(), 'yyyy-MM-dd');

    this.diagnosticoobjeto = new Diagnostico(this.caso.id, this.fechaActual,this.diagnostico,
      parseInt(this.idmedico),this.aceptado, this.fechaActual);
    this.casoreclamadoDetalleService.actualizarDiagnosticoCaso(
      this.caso.id, parseInt(this.idmedico) ,
      this.diagnostico, this.aceptado, this.fechaActual, this.diagnosticoobjeto)
    .subscribe(rta => {
      console.log(rta)
    if (rta != null){

      this.messageService.add({key: 'diagnosticadomedico', severity:'success', summary:'Caso Diagnosticado Satisfactoriamente', detail:'El diagnostico medico se registro correctamente'});

      }else{

        this.messageService.add({key: 'diagnosticadomedico', severity:'error', summary:'Error al Diagnosticar el Caso', detail:'No fue posible registrar el diagnostico del caso medico, intenta de nuevo'});

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



