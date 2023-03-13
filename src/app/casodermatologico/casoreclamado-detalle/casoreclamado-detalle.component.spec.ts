import { CasoreclamadoDetalleComponent } from './casoreclamado-detalle.component';
import { CasoreclamadoDetalleService } from './casoreclamado-detalle.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';
import {Message,MessageService} from 'primeng/api';



describe('Service: CasoreclamadoDetalle', () => {
  let servicio: CasoreclamadoDetalleService;
  let clienteHttp: HttpClient;
  let component:  CasoreclamadoDetalleComponent;
  let router: ActivatedRoute;
  let message: MessageService;

  beforeEach(() => {
    servicio = new CasoreclamadoDetalleService(clienteHttp);
    component = new CasoreclamadoDetalleComponent(servicio, router, message);
  });


  it('validar que solo retorna un elemento tipo caso', () => {
    expect(component.consultarDetalleReclamadoPorId.length == 1);
  });

  it('validar que solo actualiza un elemento tipo caso', () => {
    expect(component.actualizarDiagnostico.length == 1);
  });


});

