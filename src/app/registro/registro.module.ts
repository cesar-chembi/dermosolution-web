import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule, TranslateModule
  ],
  declarations: [RegistroComponent],
  exports:[RegistroComponent]
})
export class RegistroModule { }
