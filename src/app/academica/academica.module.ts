import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicaComponent } from './academica.component';
import {FileUploadModule} from 'primeng/fileupload';
import {ToastModule} from "primeng/toast";
import { TranslateModule } from '@ngx-translate/core';
import {ReactiveFormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {PanelModule} from "primeng/panel";

@NgModule({
  imports: [
    CommonModule, FileUploadModule, TranslateModule, ToastModule, ReactiveFormsModule, TableModule, DialogModule, PanelModule
  ],
  declarations: [AcademicaComponent],
  exports:[AcademicaComponent]
})
export class AcademicaModule { }
