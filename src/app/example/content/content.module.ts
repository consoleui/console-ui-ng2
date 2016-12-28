import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuiModule } from '../../lib';

import { ContentRoutingModule } from './content.routing';

import { DataTableDemoComponent } from './data-table-demo/data-table-demo.component';

@NgModule({
  imports: [
    CommonModule,
    CuiModule,
    ContentRoutingModule
  ],
  declarations: [DataTableDemoComponent]
})
export class ContentModule { }
