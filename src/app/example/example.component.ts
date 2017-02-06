import { Component, OnInit } from '@angular/core';

import { NavItem } from '../lib';

@Component({
  selector: 'cui-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  sideNavs: NavItem[];

  constructor() { }

  ngOnInit() {
    this.sideNavs = [
      {id: 1, text: 'Dashboard', link: 'dashboard', icon: 'dashboard'},
      {id: 2, text: 'Content', icon: 'caret', isExpanded: true, children: [
        {id: 201, text: 'Pagination', link: '/pagination'},
        {id: 202, text: 'Data Table', link: 'content/data-table', icon: 'table'}
      ]}
    ];
  }

}
