import { TestBed } from '@angular/core/testing';

import { SoporteService } from './soporte.service';

describe('SoporteService', () => {
  let service: SoporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
