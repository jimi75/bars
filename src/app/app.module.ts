import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent }       from './app.component';
import { BarsComponent }      from './bars/bars.component';
import { BarDetailComponent } from './bar-detail/bar-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    BarsComponent,
    BarDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
