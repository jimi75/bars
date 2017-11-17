import { Injectable } from '@angular/core';

import { Bar }   from './bar';
import { BARS }  from './mock-bars';

@Injectable()
export class BarService {

  constructor() { }

  getBars(): Bar[] {
    return BARS;
  }

}
