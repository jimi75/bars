import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarsComponent }        from './bars/bars.component';
import { BarDetailComponent }   from './bar-detail/bar-detail.component';
import { BarEditComponent }     from './bar-edit/bar-edit.component';
import { TestComponent }     from './test/test.component';

const routes: Routes = [
 { path: '', redirectTo: 'bars', pathMatch: 'full' },
 { path: 'bars', component: BarsComponent
    
    // Angular BUG: https://github.com/angular/angular/issues/14662 [workaround do not work.]
    
    // children:[
    //   { path: ':id', component: BarDetailComponent, outlet: 'popup' }
    // ]
  },
  { path: 'bars/:id', component: BarDetailComponent}
  { path: 'bars/edit/:id', component: BarEditComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes/*, { enableTracing: true }*/) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
