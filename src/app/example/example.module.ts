import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { CuiModule } from '../lib';
import { DashboardModule } from './dashboard';

import { ExampleRoutingModule } from './example.routing';

import { ExampleComponent } from './example.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,

    ExampleRoutingModule,
    
    CuiModule,
    DashboardModule
  ],
  declarations: [
    ExampleComponent
  ],
  bootstrap: [ExampleComponent]
})
export class ExampleModule { }
