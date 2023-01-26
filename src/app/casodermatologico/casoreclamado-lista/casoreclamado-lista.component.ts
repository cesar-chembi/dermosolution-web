import { Component, OnInit } from '@angular/core';
import { Caso } from '../casodermatologico-lista/caso';
import { CasodermatologicoListaService } from '../casodermatologico-lista/casodermatologico-lista.service';


@Component({
  selector: 'app-casoreclamado-lista',
  templateUrl: './casoreclamado-lista.component.html',
  styleUrls: ['./casoreclamado-lista.component.css']
})
export class CasoreclamadoListaComponent implements OnInit {

  casos: Caso[] = [];
  loading: boolean = false;

  constructor(private casodermatologicoListaService: CasodermatologicoListaService) { }

  ngOnInit() {
    this.getCasosReclamados();
  }

  getCasosReclamados(): void {
    this.casodermatologicoListaService.getCasos()
    .subscribe(casos => this.casos = casos);
  }


}
