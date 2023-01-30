import { Component, OnInit,Input } from '@angular/core';
import {Product} from './producto';
import { ProductService } from './Product.service';



@Component({
  selector: 'app-casodermatologico-detalle',
  templateUrl: './casodermatologico-detalle.component.html',
  styleUrls: ['./casodermatologico-detalle.component.css']
})
export class CasodermatologicoDetalleComponent implements OnInit {

  @Input() casoDetalle!: CasodermatologicoDetalleComponent;

  //imgags: string[];
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


   /*
    this.imgags = [
      'assets/bg.jpg',
      'assets/car.png',
      'assets/canberra.jpg',
      'assets/holi.jpg'
    ];
    */

  }

}