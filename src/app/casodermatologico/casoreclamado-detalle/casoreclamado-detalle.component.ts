import { Component, OnInit } from '@angular/core';
import {Product} from '../casodermatologico-detalle/producto';


@Component({
  selector: 'app-casoreclamado-detalle',
  templateUrl: './casoreclamado-detalle.component.html',
  styleUrls: ['./casoreclamado-detalle.component.css']
})
export class CasoreclamadoDetalleComponent implements OnInit {

  products: Product[];

  items = ["item1", "item2", "item3", "item4", "item5"];

	responsiveOptions: any[];
  constructor() {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
}



  ngOnInit() {
  }

}
