import { Injectable }              from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable }              from 'rxjs/Observable';
import { of }                      from 'rxjs/observable/of';


import { Bar }   from './bar';
import { BARS }  from './mock-bars';

@Injectable()
export class BarService {

  constructor(

  ) {}

  getBars(): Observable<Bar[]> {
    return of(BARS);
  }

  getBar(id: number): Observable<Bar> {
    return of(BARS.find(bar => bar.id === id));
  }

  updateBar(bar: Bar): Observable<Bar> {
    BARS[BARS.findIndex(el => el.id === bar.id)] = bar;
    return of(bar);
  }

  deleteBar(bar: Bar): Observable<Bar> {
    BARS.splice([BARS.findIndex(el => el.id === bar.id)], 1);
    return of(BARS);
  }

}
