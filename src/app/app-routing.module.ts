import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarsComponent }        from './bars/bars.component';
import { BarDetailComponent }   from './bar-detail/bar-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/bars', pathMatch: 'full' },
  { path: 'bars/:id', component: BarDetailComponent },
  { path: 'bars', component: BarsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
