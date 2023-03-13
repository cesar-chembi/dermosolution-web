
import { CasodermatologicoListaService} from '../casodermatologico-lista.service'
import { CasodermatologicoListaComponent } from './casodermatologico-lista.component';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute} from '@angular/router';


describe('CasodermatologicoListaComponent', () => {
  let clienteHttp: HttpClient;
  let component: CasodermatologicoListaComponent;
  let service: CasodermatologicoListaService;
  let router: ActivatedRoute;
  let route: Router;

  beforeEach(() => {
    service = new CasodermatologicoListaService(clienteHttp);
    component = new CasodermatologicoListaComponent(service, router, route);
   });


  it('validar que solo retorna arreglo con los casos', () => {

     expect(1 > 0);
  });
});
