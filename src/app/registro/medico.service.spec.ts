import { TestBed } from '@angular/core/testing';
import {HttpClient, HttpHandler} from "@angular/common/http";
import { MedicoService } from './medico.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('MedicoService', () => {
  let service: MedicoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MedicoService]
    });
    service = TestBed.inject(MedicoService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
