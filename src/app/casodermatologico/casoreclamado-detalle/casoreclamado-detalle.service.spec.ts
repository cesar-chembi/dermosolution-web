import { CasoreclamadoDetalleService } from './casoreclamado-detalle.service';
import { HttpClient } from '@angular/common/http';
import { CasoreclamadoDetalleComponent } from './casoreclamado-detalle.component';


describe('Service: CasoreclamadoDetalle', () => {
  let servicio: CasoreclamadoDetalleService;
  let clienteHttp: HttpClient;

  let component:  CasoreclamadoDetalleComponent;

  beforeEach(() => {

    servicio = new CasoreclamadoDetalleService(clienteHttp);
    component = new CasoreclamadoDetalleComponent(servicio);
  });


  it('validar que el servicio retorna un elemento tipo caso', () => {
    expect(servicio.getCasoDetalleId.length == 1);
  });

  it('validar que el servicio actualiza un elemento tipo caso', () => {
    expect(servicio.actualizarDiagnosticoCaso.length == 1);
  });

});

