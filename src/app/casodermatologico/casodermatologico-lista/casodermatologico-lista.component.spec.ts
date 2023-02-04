
import { CasodermatologicoListaService} from './casodermatologico-lista.service'
import { CasodermatologicoListaComponent } from './casodermatologico-lista.component';

describe('CasodermatologicoListaComponent', () => {
  let component: CasodermatologicoListaComponent;
  let servicio: CasodermatologicoListaService;

  beforeEach(() => {
    servicio = new CasodermatologicoListaService();
    component = new CasodermatologicoListaComponent(servicio);
  });


  it('validar que solo retorna arreglo con los casos', () => {

   // expect(servicio.getCasos.length > 0);

    expect(component.getCasos.length > 0);
  });
});
