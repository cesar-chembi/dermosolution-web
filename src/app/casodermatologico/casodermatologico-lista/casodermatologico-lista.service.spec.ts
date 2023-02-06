import { ComponentFixture } from '@angular/core/testing';
import { CasodermatologicoListaComponent } from './casodermatologico-lista.component';
import { CasodermatologicoListaService} from './casodermatologico-lista.service'

describe('CasodermatologicoListaComponent', () => {
  let component: CasodermatologicoListaComponent;
  let service: CasodermatologicoListaService;

  beforeEach(() => {
    service = new CasodermatologicoListaService();
    component = new CasodermatologicoListaComponent(service);
  });


  it('should create CasodermatologicoListaComponent', ()=> {
    expect(component).toBeTruthy();
    });


   it('validar en el servicio que la lista de casos no sea vacia', () => {
      expect(service.getCasos.length > 0);
    });

});
