import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';

import { Bar }   from './bar';
import { BARS }  from './mock-bars';

@Injectable()
export class BarService {

  constructor() { }

  getBars(): Observable<Bar[]> {
    return of(BARS);
  }

}
