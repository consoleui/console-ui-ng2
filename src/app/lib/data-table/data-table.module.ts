import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationModule } from '../pagination';

import { DataTableComponent } from './data-table.component';

@NgModule({
  imports: [
    CommonModule,
    PaginationModule
  ],
  declarations: [DataTableComponent],
  exports: [DataTableComponent]
})
export class DataTableModule { }
