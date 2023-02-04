import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Medico} from "./medico";
import {MedicoService} from "./medico.service";


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  medicoForm : FormGroup;
  submitted = false;
  constructor(private fbuilder: FormBuilder, private medicoService: MedicoService) { }

  ngOnInit(): void {
    this.medicoForm = this.fbuilder.group({
      tipo_identificacion: ["", Validators.required],
      numero_identificacion: ["", Validators.required],
      nombres: ["", [Validators.required, Validators.minLength(3)]],
      apellidos: ["", Validators.required],
      fecha_nacimiento: ["", Validators.required],
      sexo: ["", Validators.required],
      lugar_nacimiento: ["", Validators.required],
      lugar_residencia: ["", Validators.required],
      numero_celular: ["", Validators.required],
      numero_registro_profesional: ["", Validators.required],
      correo: ["", Validators.required, Validators.email],
      clave: ["", [Validators.required, Validators.minLength(6)]],
      confirmacionclave: ["", Validators.required],
    },
      {
        Validators:this.clavesIguales('clave', 'confirmacionclave')
      });
  }

  clavesIguales(clave: string, claveConfirmacion: string){
    return (formGroup:FormGroup) => {
      const clave1Control= formGroup.get(clave);
      const clave2Control= formGroup.get(claveConfirmacion);
      if (clave1Control?.value === clave2Control?.value)
      {
        clave1Control?.setErrors(null)
      }else {
        clave1Control?.setErrors({noIgual:true})
      }
    }
  }
  claveNovalido(){
    const clave1Control= this.medicoForm?.get('clave')?.value;
    const clave2Control= this.medicoForm?.get('confirmacionclave')?.value;
    if (clave1Control !== clave2Control){
      return true;
    }else{
      return false;
    }

  }
  crearMedico(nuevoMedico: Medico): void {
    this.claveNovalido()
    if (this.medicoForm.invalid){
      return Object.values(this.medicoForm.controls).forEach(control =>{
        control.markAllAsTouched()
      })
    }

    this.medicoService.crear(nuevoMedico).subscribe(rta => {
      console.log(rta)
      if (rta != null){
        let mensaje = "Se creo el médico  "+rta.status;
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
  get tipoIdentificacionNovalid(){
    return this.medicoForm.get('tipo_identificacion')?.invalid && this.medicoForm.get('tipo_identificacion')?.touched;
  }
  get numeroIdentificacionNovalid(){
    return this.medicoForm.get('numero_identificacion')?.invalid && this.medicoForm.get('numero_identificacion')?.touched;
  }
  get nombresNovalid(){
    return this.medicoForm.get('nombres')?.invalid && this.medicoForm.get('nombres')?.touched;
  }
  get apellidosNovalid(){
    return this.medicoForm.get('apellidos')?.invalid && this.medicoForm.get('apellidos')?.touched;
  }
  get fechaNacimientoNovalid(){
    return this.medicoForm.get('fecha_nacimiento')?.invalid && this.medicoForm.get('fecha_nacimiento')?.touched;
  }
  get sexoNovalid(){
    return this.medicoForm.get('sexo')?.invalid && this.medicoForm.get('sexo')?.touched;
  }
  get lugarNacimientoNovalid(){
    return this.medicoForm.get('lugar_nacimiento')?.invalid && this.medicoForm.get('lugar_nacimiento')?.touched;
  }
  get lugarResidenciaNovalid(){
    return this.medicoForm.get('lugar_residencia')?.invalid && this.medicoForm.get('lugar_residencia')?.touched;
  }
  get numeroCelularNovalid(){
    return this.medicoForm.get('numero_celular')?.invalid && this.medicoForm.get('numero_celular')?.touched;
  }
  get numeroRegistroProfesionalNovalid(){
    return this.medicoForm.get('numero_registro_profesional')?.invalid && this.medicoForm.get('numero_registro_profesional')?.touched;
  }
  get correoNovalid(){
    return this.medicoForm.get('correo')?.invalid && this.medicoForm.get('correo')?.touched;
  }
  get claveNovalid(){
    return this.medicoForm.get('clave')?.invalid && this.medicoForm.get('clave')?.touched;
  }
}
