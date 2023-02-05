import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Medico} from "./medico";
import {MedicoService} from "./medico.service";
import {UtilidadesService} from "../general/utilidades.service";
import {Especialidad} from "./especialidad";


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  medicoForm : FormGroup;
  submitted = false;
  tiposDocumentoList:any;
  paisesList:any;
  especialidadesList: Array<Especialidad>;

  constructor(private fbuilder: FormBuilder, private medicoService: MedicoService,
              private utilidadesService: UtilidadesService  ) { }

  ngOnInit(): void {
    this.tiposDocumentoList = this.utilidadesService.getTiposDocumento()
    this.paisesList = this.utilidadesService.getPaises();
    this.getEspecialidades();
    this.medicoForm = this.fbuilder.group({
      tipo_identificacion: ["", Validators.required],
      numero_identificacion: ["", Validators.required],
      nombres: ["", [Validators.required, Validators.minLength(3)]],
      apellidos: ["", Validators.required],
      fecha_nacimiento: ["", Validators.required],//, ValidadorEspecial.validarFechas
      sexo: ["", Validators.required],
      lugar_nacimiento: ["", Validators.required],
      lugar_residencia: ["", Validators.required],
      numero_celular: ["", Validators.required],
      numero_registro_profesional: ["", Validators.required],
      correo: ["", [Validators.required, Validators.email]],
      clave: ["", [Validators.required, Validators.minLength(6)]],
      clave2: ["", Validators.required],
    },
      {
        Validators:[this.clavesIguales('clave', 'clave2'),
        this.validarFechaNac('fecha_nacimiento')]
      });
  }

  clavesIguales(clave: string, clave2: string){
    return (formGroup:FormGroup) => {
      const clave1Control= formGroup.get(clave);
      const clave2Control= formGroup.get(clave2);
      if (clave1Control?.value === clave2Control?.value)
      {
        clave2Control?.setErrors(null)
      }else {
        clave2Control?.setErrors({noIgual:true})
      }
    }
  }
  validarFechaNac(fecha_nacimiento: string){
    return (formGroup:FormGroup) => {
      const fechaControl= formGroup.get(fecha_nacimiento);
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
  claves12Novalido(){
    const clave1Control= this.medicoForm?.get('clave')?.value;
    const clave2Control= this.medicoForm?.get('clave2')?.value;
    if (clave1Control !== clave2Control){
      return true;
    }else{
      return false;
    }

  }

  validarFechas(){
    let texto = this.medicoForm?.get('fecha_nacimiento')?.value;
    let fecha:Date = new Date(texto);

    let fechaSeleccionada:Date = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate()+1);
    let fechahoy:Date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    if (fechaSeleccionada>fechahoy){
      return {fechainvalida:true}
    }

    return null;
  }
  crearMedico(): void {

    const fechaOK = this.validarFechas()
    if (fechaOK)
    {
      this.medicoForm.get('fecha_nacimiento')?.setValue("");
      return ;
    }

    const noIguales = this.claves12Novalido()
    if (noIguales) {
      this.medicoForm.get('clave2')?.setValue("");
      return ;
    }

    if (this.medicoForm.invalid){
      return Object.values(this.medicoForm.controls).forEach(control =>{
        control.markAllAsTouched()
      })
    }
    const nuevoMedico = this.medicoForm.value;
    this.medicoService.crear(nuevoMedico).subscribe(rta => {
      console.log(rta)
      if (rta != null){
        let mensaje = "Se creo el médico  ";
        this.mensajeExito(mensaje);
      }else{
        this.mensajeAdvertencia('El usuario no se pudo crear, intenta de nuevo');

      }

    });

    this.medicoForm.reset();
  }
  mensajeExito(mensaje: string ): void {
    alert(mensaje)
  }
  mensajeAdvertencia(mensaje:string): void {
    alert(mensaje)
  }

  cancelar(): void {
    console.log("Medico no se creo ");
    this.medicoForm.reset();
  }
  get nombresNovalid(){
    return this.medicoForm.get('nombres')?.invalid && this.medicoForm.get('nombres')?.touched;
  }
  getEspecialidades(): void {
    this.medicoService.getListaEspecialidades().subscribe(
      especialidades => {
        this.especialidadesList = especialidades;
      }
    );
  }
}

