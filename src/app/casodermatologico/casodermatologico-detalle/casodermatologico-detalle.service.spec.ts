/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CasodermatologicoDetalleService } from './casodermatologico-detalle.service';

describe('Service: CasodermatologicoDetalle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CasodermatologicoDetalleService]
    });
  });

  it('should ...', inject([CasodermatologicoDetalleService], (service: CasodermatologicoDetalleService) => {
    expect(service).toBeTruthy();
  }));
});
