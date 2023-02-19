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

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'academica', component: AcademicaComponent },
  { path: 'detalle/:id/:idpaciente', component: CasodermatologicoDetalleComponent },
  { path: 'detallereclamados/:id/:idpaciente', component: CasoreclamadoDetalleComponent },
  { path: 'listacasos', component: CasodermatologicoListaComponent },
  { path: 'casosreclamados', component: CasoreclamadoListaComponent }

];


@NgModule({
  imports: [ RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule , ],
  declarations: [RouteComponent]
})
export class RouteModule { }
