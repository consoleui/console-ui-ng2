import { Component, OnInit, Input, Output, EventEmitter, ContentChild, TemplateRef } from '@angular/core';

import { CuiPagination } from '../pagination';

import { Column } from './defs/api';

@Component({
  selector: 'cui-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() columns: Column[];
  @Input() data: any[];
  @Input() pagination: CuiPagination;
  @Input() selectType?: string;
  //input, Output searchForm
  @Output() reload = new EventEmitter();

  @ContentChild("rowActions") rowActions: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  fireReload() {
    this.reload.emit(this.pagination);
  }
}
