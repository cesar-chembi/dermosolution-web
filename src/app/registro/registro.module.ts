import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { TranslateModule } from '@ngx-translate/core';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule, TranslateModule, ReactiveFormsModule
    ],
  declarations: [RegistroComponent],
  exports:[RegistroComponent]
})
export class RegistroModule { }
