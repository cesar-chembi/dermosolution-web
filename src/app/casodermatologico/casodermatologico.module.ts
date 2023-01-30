import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasodermatologicoComponent } from './casodermatologico.component';
import { CasodermatologicoDetalleComponent } from './casodermatologico-detalle/casodermatologico-detalle.component';
import { CasodermatologicoListaComponent } from './casodermatologico-lista/casodermatologico-lista.component';
import { TranslateModule } from '@ngx-translate/core';
import { CasoreclamadoDetalleComponent } from './casoreclamado-detalle/casoreclamado-detalle.component';
import { CasoreclamadoListaComponent } from './casoreclamado-lista/casoreclamado-lista.component';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';



@NgModule({
  imports: [
    CommonModule,  TranslateModule, TableModule, PanelModule,CasoreclamadoDetalleComponent, CarouselModule, ButtonModule, ToastModule
  ],
  declarations: [CasodermatologicoComponent,CasodermatologicoDetalleComponent, CasoreclamadoDetalleComponent],
  exports:[CasodermatologicoDetalleComponent,CasoreclamadoDetalleComponent]
})
export class CasodermatologicoModule { }
