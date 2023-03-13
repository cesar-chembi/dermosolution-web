import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UtilidadesService} from "../../general/utilidades.service";
import {SeguimientoService} from "../seguimiento.service";
import {Seguimiento} from "../seguimiento";
import {Imagen} from "../imagen";
import {MessageService} from "primeng/api";


@Component({
  selector: 'app-seguimiento-lista',
  templateUrl: './seguimiento-lista.component.html',
  styleUrls: ['./seguimiento-lista.component.css']
})
export class SeguimientoListaComponent {
  display: boolean = false;
  idSoporteSelect : number = 0;
  seguimientoSelecionado : Seguimiento;
  idmedico: number = 2;
  seguimientos: Seguimiento[] = [];
  imagenes: Imagen[] = [];
  loading: boolean = false;
  nacionalidad: string;
  sexo: string;
  sexoList:any;
  paisesList:any;
  descripcion:string;
  ffinal:string;
  nombre:string;
  finicial:string;
  edad:string;
  resultado: string;
  actualizaForm : FormGroup;

  constructor(private fbuilder: FormBuilder, private seguimientoService: SeguimientoService,
              private route: ActivatedRoute, public router: Router,
              private utilidadesService:UtilidadesService,
              private messageService: MessageService) {
  }


  ngOnInit() {
    this.paisesList = this.utilidadesService.getPaises();
    this.sexoList = this.utilidadesService.getSexos();
    let id = this.route.snapshot.paramMap.get('id')!;
    this.getSeguimientos();
    this.seguimientoSelecionado = new Seguimiento(0,0,"",new Date(), "", new Date(),"");
    let fechaHoy = new Date()


    this.actualizaForm = this.fbuilder.group({
      msgmedico: ["", Validators.required],
      fechamsgmedico: [fechaHoy.getFullYear()+"-"+(fechaHoy.getMonth() + 1)+"-"+fechaHoy.getDate()]
    });
  }


  getSeguimientos(): void {
    this.seguimientoService.getListaSeguimientosMedico(this.idmedico).subscribe(
      seguimientos => {
        this.seguimientos = seguimientos;
      }
    );
  }
  getImagenes(idSeguimiento: number): void {
    this.seguimientoService.getListImagenes(idSeguimiento).subscribe(
      imagenes => {
        this.imagenes = imagenes;
      }
    );
  }
  showDialog(elseguimiento: Seguimiento) {
    this.seguimientoSelecionado = elseguimiento;
    if (this.seguimientoSelecionado.mensaje_medico == null)
      this.seguimientoSelecionado.mensaje_medico = "";
    this.getImagenes(this.seguimientoSelecionado.id)
    this.display = true;
  }
  hideDialog() {

    this.display = false;
  }
  guardarMensaje(){
    if (this.actualizaForm.value.msgmedico == "" || this.actualizaForm.value.msgmedico == null){
      this.mensajeAdvertencia('EL mensaje del médico esta vacio');
      return ;
    }
    this.seguimientoSelecionado.mensaje_medico = this.actualizaForm.value.msgmedico;
    this.seguimientoSelecionado.fecha_msg_medico = this.actualizaForm.value.fechamsgmedico
    this.seguimientoService.actualizarSeguimiento(this.seguimientoSelecionado).subscribe(rta => {
        if (rta != null){
          this.mensajeExito("Se actualizó el mensaje del médico ");
          this.getSeguimientos()
        }else{
          this.mensajeAdvertencia('La actualización no fue exitosa');

        }

      },
      error => {
        this.mensajeAdvertencia(error.message)
      });
    this.display = false;
  }
  mensajeExito(mensaje: string ): void {
    this.messageService.add({severity:'success', summary:'Información', detail:mensaje});
  }
  mensajeAdvertencia(mensaje:string): void {
    this.messageService.add({severity:'warning', summary:'Información', detail:mensaje});
  }

}
