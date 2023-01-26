import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicaComponent } from './academica.component';
import {FileUploadModule} from 'primeng/fileupload';

@NgModule({
  imports: [
    CommonModule,FileUploadModule
  ],
  declarations: [AcademicaComponent],
  exports:[AcademicaComponent]
})
export class AcademicaModule { }
