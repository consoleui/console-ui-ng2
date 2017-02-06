import { NgModule } from '@angular/core';
//import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { CuiModule } from '../lib';

import { CmsComponent } from './cms.component';
import { CmsRoutingModule } from './cms-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  imports: [
    //BrowserModule,
    HttpModule,

    CuiModule,
  
    CmsRoutingModule,
    DashboardModule,
  ],
  declarations: [CmsComponent],
  providers: [/* TODO: Providers go here */],
  bootstrap: [CmsComponent],
})
export class CmsModule { }
