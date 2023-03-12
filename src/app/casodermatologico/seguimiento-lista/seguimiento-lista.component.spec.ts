import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoListaComponent } from './seguimiento-lista.component';

describe('SeguimientoListaComponent', () => {
  let component: SeguimientoListaComponent;
  let fixture: ComponentFixture<SeguimientoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguimientoListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguimientoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
