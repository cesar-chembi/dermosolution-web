import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasodermatologicoComponent } from './casodermatologico.component';
import { CasodermatologicoDetalleComponent } from './casodermatologico-detalle/casodermatologico-detalle.component';
import { TranslateModule } from '@ngx-translate/core';
import { CasoreclamadoDetalleComponent } from './casoreclamado-detalle/casoreclamado-detalle.component';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';



@NgModule({
  imports: [
    CommonModule,  TranslateModule, TableModule, PanelModule, CarouselModule,
    ButtonModule, ToastModule
  ],
  declarations: [CasodermatologicoComponent],
  exports:[]
})
export class CasodermatologicoModule { }
