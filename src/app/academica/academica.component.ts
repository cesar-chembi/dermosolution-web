import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Especialidad} from "../registro/especialidad";
import {MedicoService} from "../registro/medico.service";
import {UtilidadesService} from "../general/utilidades.service";
import {MessageService} from "primeng/api";
import {SoporteService} from "./soporte.service";
import {Caso} from "../casodermatologico/casodermatologico-lista/caso";
import {Soporte} from "./soporte";

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
  archivo: any;

  constructor(private fbuilder: FormBuilder, private soporteService: SoporteService,
              private utilidadesService: UtilidadesService, private messageService: MessageService  ) { }


  uploadedFiles: any[] = [];


  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }
  ngOnInit() {
    let fechaHoy = new Date()
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
      file: ['', Validators.required],
      url: ['', Validators.required],
      fileSource: ['', Validators.required]
    },
      {
        Validators:[this.validarFecha('fecha_grado')]
      });
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
  crearSoporte(): void {

    if (this.soporteForm.invalid){
      return Object.values(this.soporteForm.controls).forEach(control =>{
        control.markAllAsTouched()
      })
    }
    const nuevoSoporte = this.soporteForm.value;
    const formData = new FormData();
    formData.append('file', this.soporteForm.get('fileSource').value);
    this.soporteService.crear(nuevoSoporte).subscribe(rta => {
      if (rta != null){
        this.mensajeExito("Se creo el soporte  se asignó su ID: "+rta.id);
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
      const file = event.target.files[0];
      this.archivo = file;
      this.soporteForm.patchValue({
        fileSource: file
      });
    }
  }
  getSoportes()
  {
    this.soporteService.getListaSoportes().subscribe(soportes => this.soportes = soportes);
  }
}
