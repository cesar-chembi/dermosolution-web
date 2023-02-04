import { Component, OnInit } from '@angular/core';
import { Caso } from './caso';
import { CasodermatologicoListaService } from './casodermatologico-lista.service';

@Component({
  selector: 'app-casodermatologico-lista',
  templateUrl: './casodermatologico-lista.component.html',
   styleUrls: ['./casodermatologico-lista.component.css']
})
export class CasodermatologicoListaComponent implements OnInit {
  casos: Caso[] = [];
  loading: boolean = false;

  constructor(private casodermatologicoListaService: CasodermatologicoListaService) { }

  ngOnInit() {

    this.getCasos();
  }

  getCasos(): void {
    this.casodermatologicoListaService.getCasos()
    .subscribe(casos => this.casos = casos);
  }

}
