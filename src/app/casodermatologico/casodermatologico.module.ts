import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasodermatologicoComponent } from './casodermatologico.component';
import { TranslateModule } from '@ngx-translate/core';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import { SeguimientoListaComponent } from './seguimiento-lista/seguimiento-lista.component';
import {CasodermatologicoListaComponent} from "./casodermatologico-lista/casodermatologico-lista.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DialogModule} from "primeng/dialog";


@NgModule({
    imports: [
        CommonModule, TranslateModule, TableModule, PanelModule, CarouselModule,
        ButtonModule, ToastModule, ReactiveFormsModule, FormsModule, DialogModule
    ],
  declarations: [CasodermatologicoComponent, SeguimientoListaComponent, CasodermatologicoListaComponent],
  exports:[]
})
export class CasodermatologicoModule { }
