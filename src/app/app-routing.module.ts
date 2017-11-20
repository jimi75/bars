import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarsComponent }        from './bars/bars.component';
import { BarAddComponent }      from './bar-add/bar-add.component';
import { BarEditComponent }     from './bar-edit/bar-edit.component';
import { BarDetailComponent }   from './bar-detail/bar-detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'bars', pathMatch: 'full' },

  { path: 'bars',          component: BarsComponent},
  { path: 'bars/add',      component: BarAddComponent },
  { path: 'bars/edit/:id', component: BarEditComponent },
  { path: 'bars/:id',      component: BarDetailComponent},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes/*, { enableTracing: true }*/) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
