/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CasodermatologicoListaService } from './casodermatologico-lista.service';

describe('Service: CasodermatologicoLista', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CasodermatologicoListaService]
    });
  });

  it('should ...', inject([CasodermatologicoListaService], (service: CasodermatologicoListaService) => {
    expect(service).toBeTruthy();
  }));
});
