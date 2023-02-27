import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
//import AWSS3UploadAshClient from "aws-s3-upload-ash";
import {UtilidadesService} from "../general/utilidades.service";
import {MessageService} from "primeng/api";
import {SoporteService} from "./soporte.service";
import {Soporte} from "./soporte";
//import { UploadResponse } from 'aws-s3-upload-ash/dist/types';
import { EnvService } from '../servicios/env.service';

@Component({
  selector: 'app-academica',
  templateUrl: './academica.component.html',
  styleUrls: ['./academica.component.css']
})
export class AcademicaComponent implements OnInit {
  soportes: Soporte[] = [];
  loading: boolean = false;
  soporteForm : FormGroup;
  submitted = false;
  idSoporte = 0;
  tiposSoporteList:any;
  fileSelected: any = null;
  idSoporteSelect : number = 0;
  datosList:any;
  awsAK:string;
  awsSK:string;
  //S3CustomClient: AWSS3UploadAshClient;

  config = {
    bucketName: '',
    dirName: 'soportes', /* optional - when use: e.g BUCKET_ROOT/dirName/fileName.extesion */
    region: '',
    accessKeyId: '',
    secretAccessKey: '',
    s3Url: ''
  }


  constructor(private fbuilder: FormBuilder, private soporteService: SoporteService,
              private utilidadesService: UtilidadesService, private messageService: MessageService,
              private env: EnvService) { }


  uploadedFiles: any[] = [];


  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }
  ngOnInit() {
    let fechaHoy = new Date()
    this.iniciarBucket()
    this.getSoportes();
    this.tiposSoporteList = this.utilidadesService.getTiposSoporte()
    this.soporteForm = this.fbuilder.group({
      medico: ["", Validators.required],
      tipo_soporte: ["", Validators.required],
      institucion_educativa: ["", Validators.required],
      nombre_programa: ["", Validators.required],
      descripcion: ["", Validators.required],
      graduado: ["", Validators.required],
      fecha_grado: ["", Validators.required],
      fecha_soporte:[fechaHoy.getFullYear()+"-"+(fechaHoy.getMonth() + 1)+"-"+fechaHoy.getDate()],
      validado: ["0", Validators.required],
      file: ["", Validators.required]
    },
      {
        Validators:[this.validarFecha('fecha_grado')]
      });
  }
  iniciarBucket(){
    console.log(this.datosList)
    this.config.bucketName = this.env.s3;
    this.config.s3Url = this.env.HTTPS3;
    this.config.region = this.env.S3REGION;
    this.config.accessKeyId = this.env.AWS_AKEY;
    this.config.secretAccessKey = this.env.AWS_SKEY;
    //this.S3CustomClient = new AWSS3UploadAshClient(this.config);
  }

  validarFecha(fecha_grado: string){
    return (formGroup:FormGroup) => {
      const fechaControl= formGroup.get(fecha_grado);
      let texto = fechaControl?.value;
      let fecha:Date = new Date(texto);

      let fechaSeleccionada:Date = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate()+1);
      let fechahoy:Date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

      if (fechaSeleccionada<=fechahoy)
      {
        fechaControl?.setErrors(null)
      }else {
        fechaControl?.setErrors({noIgual:true})
      }
    }

  }

/*
  crearSoporte(): void {
    this.handleSendFile()
  }
*/

  registraSoporte(locationfile: string): void {

    if (this.soporteForm.invalid){
      return Object.values(this.soporteForm.controls).forEach(control =>{
        control.markAllAsTouched()
      })
    }
    const nuevoSoporte = this.soporteForm.value;
    nuevoSoporte.url  = locationfile;
    this.soporteService.crear(nuevoSoporte).subscribe(rta => {
      if (rta != null){
        this.mensajeExito("Se creo el soporte  al medico");
        this.getSoportes()
      }else{
        this.mensajeAdvertencia('El soporte no se pudo adicionar, intenta de nuevo');

      }

    },
      error => {
        this.mensajeAdvertencia(error.message)
      });

    this.soporteForm.reset();
  }
  mensajeExito(mensaje: string ): void {
    this.messageService.add({severity:'success', summary:'Información', detail:mensaje});
  }
  mensajeAdvertencia(mensaje:string): void {
    this.messageService.add({severity:'warning', summary:'Información', detail:mensaje});
  }

  cancelar(): void {
    console.log("Medico no se creo ");
    this.soporteForm.reset();
  }
  onFileChange(event) {

    if (event.target.files.length > 0) {
      this.fileSelected = event.target.files[0];

    }
  }
  getSoportes()
  { const idMedico = 1;
    this.soporteService.getListaSoportesByMedico(idMedico).subscribe(soportes => this.soportes = soportes);
  }

/*
  async handleSendFile() {
    await this.S3CustomClient
      .uploadFile(this.fileSelected, this.fileSelected.type, undefined, this.fileSelected.name, "private")
      .then((data: UploadResponse) => {
        //console.log(data)
        //this.mensajeExito("Archivo subido"+data.location)
        this.registraSoporte(data.location)
      })
      .catch((err: any) => {console.error(err)
        this.mensajeAdvertencia("Error al enviar el Archivo al S3, no se puede registrar el soporte")
      })
  }
*/

  borrarSoporte(){
    if (this.idSoporteSelect ==0){
      this.mensajeAdvertencia('No ha selecionado un soporte para borrar');
      return ;
    }
    this.display = false;
    this.soporteService.borrarSoporteMedico(this.idSoporteSelect).subscribe(rta => {
        if (rta == null){
          this.mensajeExito("Se eliminó el soporte del medico");
          this.getSoportes()
          this.idSoporteSelect = 0
        }else{
          this.mensajeAdvertencia('El soporte no se pudo eliminar, intenta de nuevo');
        }
      },
      error => {
        this.mensajeAdvertencia(error.message)
      });

  }
  display: boolean = false;

  showDialog(id: number) {
    this.idSoporteSelect = id;
    this.display = true;
  }
  hideDialog() {

    this.display = false;
  }

}
