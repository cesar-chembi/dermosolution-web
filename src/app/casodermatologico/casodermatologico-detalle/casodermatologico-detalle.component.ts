import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Caso } from '../caso';
import { CasodermatologicoDetalleService } from './casodermatologico-detalle.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Message,MessageService} from 'primeng/api';
import { UsuarioService } from "../../usuario/usuario.service";


@Component({
  selector: 'app-casodermatologico-detalle',
  templateUrl: './casodermatologico-detalle.component.html',
  styleUrls: ['./casodermatologico-detalle.component.css']
})
export class CasodermatologicoDetalleComponent implements OnInit {

  msgs2: Message[];
  caso : Caso;
  items = ["item1", "item2", "item3", "item4", "item5"];
  resultado: string;
  aceptado : boolean = true;
  idmedico:string;
	responsiveOptions: any[];
  constructor(private casodermatologicoDetalleService: CasodermatologicoDetalleService,
    private route: ActivatedRoute, private userService: UsuarioService,
    private messageService: MessageService
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

  const token: string = this.userService.getToken();
  this.idmedico = this.userService.getIdmedico();
  let idpaciente = this.route.snapshot.paramMap.get('idpaciente')!;
  this.consultarDetalleReclamadoPorId(parseInt(this.idmedico),parseInt(idpaciente));
}


consultarDetalleReclamadoPorId(identificadorcaso: number, identificadorpaciente: number): void {
  this.casodermatologicoDetalleService.getReclamadosDetalle(identificadorpaciente).subscribe(
     casos => {
      this.caso = casos[0];
    }
     );

     console.log(this.caso[0]);
  }



reclamarCaso():void{
  let date: Date = new Date();
  this.casodermatologicoDetalleService.reclamarCaso(parseInt(this.idmedico),
    this.caso.id)
  .subscribe(rta => {
    console.log(rta)
      if (rta != null){


        this.messageService.add({key: 'reclamado', severity:'success', summary:'Caso Reclamado Satisfactoriamente', detail:'El Caso fue reclamado correctamente por el medico'});


    }else{

      this.messageService.add({key: 'reclamado', severity:'error', summary:'Error al Reclamar', detail:'No fue posible reclamar el caso por el medico, intenta de nuevo'});

    }

});


}

  reclamarcasoform = new FormGroup({
    diagnostico: new FormControl('', [Validators.required])
     });


     submit() {
      if (true)
        this.resultado = "Todos los datos son válidos";
      else
        this.resultado = "Hay datos inválidos en el formulario";
    }


}
