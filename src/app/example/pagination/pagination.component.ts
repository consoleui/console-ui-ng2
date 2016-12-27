import { Component, OnInit } from '@angular/core';

import { PaginationModel } from '../../lib/pagination';

@Component({
  selector: 'cui-pagination-demo',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  pagination: PaginationModel;

  constructor() { 
    this.pagination = new PaginationModel(95, 10, 5);
  }

  ngOnInit() {
    
  }

}
