import { CasoreclamadoDetalleService } from './casoreclamado-detalle.service';
import { HttpClient } from '@angular/common/http';
import { CasoreclamadoDetalleComponent } from './casoreclamado-detalle.component';
import { ActivatedRoute} from '@angular/router';
import {Message,MessageService} from 'primeng/api';

describe('Service: CasoreclamadoDetalle', () => {
  let servicio: CasoreclamadoDetalleService;
  let clienteHttp: HttpClient;
  let router: ActivatedRoute;
  let component:  CasoreclamadoDetalleComponent;
  let message: MessageService;

  beforeEach(() => {

    servicio = new CasoreclamadoDetalleService(clienteHttp);
    component = new CasoreclamadoDetalleComponent(servicio, router, message);
  });


  it('validar que el servicio retorna un elemento tipo caso', () => {
    expect(servicio.getReclamadosDetalle.length == 1);
  });

  it('validar que el servicio actualiza un elemento tipo caso', () => {
    expect(servicio.actualizarDiagnosticoCaso.length == 1);
  });

});

