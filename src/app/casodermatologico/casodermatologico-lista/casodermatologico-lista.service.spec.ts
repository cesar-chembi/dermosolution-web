import { ComponentFixture } from '@angular/core/testing';
import { CasodermatologicoListaComponent } from './casodermatologico-lista.component';
import { CasodermatologicoListaService} from './casodermatologico-lista.service'
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


  it('should create CasodermatologicoListaComponent', ()=> {
    expect(component).toBeTruthy();
    });


   it('validar en el servicio que la lista de casos no sea vacia', () => {
      expect(service.getCreados.length > 0);
    });

});
