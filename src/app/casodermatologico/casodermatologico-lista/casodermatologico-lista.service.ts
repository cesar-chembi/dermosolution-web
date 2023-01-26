import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CASOS } from './mock-casos';
import { Caso } from './caso';

@Injectable({
  providedIn: 'root'
})
export class CasodermatologicoListaService {

constructor() { }


getCasos(): Observable<Caso[]> {
  const casos = of(CASOS);
  return casos;
}


}
