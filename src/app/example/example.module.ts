//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { ExampleMockData } from './mock';
import './mock-data';

import { CuiModule } from '../lib';
import { DashboardModule } from './dashboard';

import { ExampleRoutingModule } from './example.routing';

import { ExampleComponent } from './example.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [
    //BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,

    //InMemoryWebApiModule.forRoot(ExampleMockData),

    ExampleRoutingModule,
    
    CuiModule,
    DashboardModule
  ],
  declarations: [
    ExampleComponent,
    PaginationComponent
  ],
  bootstrap: [ExampleComponent]
})
export class ExampleModule { }
