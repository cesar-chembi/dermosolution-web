import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { TranslateModule } from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MultiSelectModule} from "primeng/multiselect";
import {ToastModule} from "primeng/toast";

@NgModule({
  imports: [
    CommonModule, TranslateModule, ReactiveFormsModule, MultiSelectModule, FormsModule, ToastModule
  ],
  declarations: [RegistroComponent],
  exports:[RegistroComponent]
})
export class RegistroModule { }
