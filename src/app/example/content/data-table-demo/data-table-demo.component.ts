import { Component, OnInit } from '@angular/core';

import { PaginationModel } from '../../../lib';

@Component({
  selector: 'cui-data-table-demo',
  templateUrl: './data-table-demo.component.html',
  styleUrls: ['./data-table-demo.component.scss']
})
export class DataTableDemoComponent implements OnInit {
  columns;
  datas;
  pagination: PaginationModel;

  constructor() { 
  }

  ngOnInit() {
    this.columns = [
      {title: 'ID'},
      {title: 'TITLE'},
      {title: 'Views'},
      {title: 'Comments'},
      {title: 'Actions'}
    ];

    this.pagination = new PaginationModel(95, 10, 5);
  }

}
