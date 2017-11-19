import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarsComponent }        from './bars/bars.component';
import { BarEditComponent }     from './bar-edit/bar-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/bars', pathMatch: 'full' },
  { path: 'bars', component: BarsComponent },
  { path: 'bars/:id', component: BarsComponent },
  { path: 'bars/edit/:id', component: BarEditComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
