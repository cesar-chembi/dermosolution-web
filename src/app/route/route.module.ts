import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteComponent } from './route.component';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { RegistroComponent } from '../registro/registro.component';
import { AcademicaComponent } from '../academica/academica.component';
import { CasodermatologicoDetalleComponent } from '../casodermatologico/casodermatologico-detalle/casodermatologico-detalle.component';
import { CasodermatologicoListaComponent } from '../casodermatologico/casodermatologico-lista/casodermatologico-lista.component';
import { CasoreclamadoListaComponent } from '../casodermatologico/casoreclamado-lista/casoreclamado-lista.component';
import { CasoreclamadoDetalleComponent } from '../casodermatologico/casoreclamado-detalle/casoreclamado-detalle.component';
import { ValidadorAccesoGuard } from '../guards/validador-acceso.guard'
import {SeguimientoListaComponent} from "../casodermatologico/seguimiento-lista/seguimiento-lista.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch:'full' },
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent },
  { path: 'academica', component: AcademicaComponent, canActivate: [ValidadorAccesoGuard]},
  { path: 'detalle/:id/:idpaciente', component: CasodermatologicoDetalleComponent, canActivate: [ValidadorAccesoGuard] },
  { path: 'detallereclamados/:id/:idpaciente', component: CasoreclamadoDetalleComponent, canActivate: [ValidadorAccesoGuard] },
  { path: 'listacasos', component: CasodermatologicoListaComponent, canActivate: [ValidadorAccesoGuard] },
  { path: 'casosreclamados', component: CasoreclamadoListaComponent, canActivate: [ValidadorAccesoGuard] },
  { path: 'seguimientodiagnostico', component: SeguimientoListaComponent, canActivate: [ValidadorAccesoGuard] },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule , ],
  declarations: [RouteComponent]
})
export class RouteModule { }
