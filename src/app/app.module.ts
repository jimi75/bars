import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';

import { AppComponent }       from './app.component';
import { AppRoutingModule }   from './app-routing.module';

import { BarsComponent }      from './bars/bars.component';
import { BarDetailComponent } from './bar-detail/bar-detail.component';
import { BarService }         from './bar.service';
import { BarEditComponent }   from './bar-edit/bar-edit.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }            from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    BarsComponent,
    BarDetailComponent,
    BarEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
