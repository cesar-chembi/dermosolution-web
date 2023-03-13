import { Injectable, Output, EventEmitter } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class UsuarioMenuService {

  isCambio = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    this.isCambio = !this.isCambio;
    this.change.emit(this.isCambio);
  }
}
