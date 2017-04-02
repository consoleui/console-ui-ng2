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
        // {id: 201, text: 'Pagination', link: '/pagination'},
        {id: 202, text: 'Data Table', link: 'content/data-table', icon: 'table'}
      ]},
      {
        id: 3, text: 'Form Controls', icon: 'caret', isExpanded: true, children: [
          {id: 301, text: 'Checkbox', link: '', icon: ''},
          {id: 301, text: 'Input', link: '', icon: ''},
          {id: 301, text: 'Radil Button', link: '', icon: ''},
          {id: 301, text: 'Select', link: '', icon: ''},
          {id: 301, text: 'Slider', link: '', icon: ''},
          {id: 301, text: 'Slide Toggle', link: '', icon: ''},
        ]
      },
      {
        id: 3, text: 'Navigation', icon: 'caret', isExpanded: true, children: [
          {id: 301, text: 'Menu', link: '', icon: ''},
          {id: 301, text: 'Sidenav', link: '', icon: ''},
          {id: 301, text: 'Toolbar', link: '', icon: ''},
        ]
      },
      {
        id: 3, text: 'Layout', icon: 'caret', isExpanded: true, children: [
          {id: 301, text: 'List', link: '', icon: ''},
          {id: 301, text: 'Grid List', link: '', icon: ''},
          {id: 301, text: 'Card', link: '', icon: ''},
          {id: 301, text: 'Tabs', link: '', icon: ''},
        ]
      },
      {
        id: 3, text: 'BUTTONS, INDICATORS & ICONS', icon: 'caret', isExpanded: true, children: [
          {id: 301, text: 'Button', link: '', icon: ''},
          {id: 301, text: 'Button Toggle', link: '', icon: ''},
          {id: 301, text: 'Chips', link: '', icon: ''},
          {id: 301, text: 'Icon', link: '', icon: ''},
          {id: 301, text: 'Progress spinner', link: '', icon: ''},
          {id: 301, text: 'Progress bar', link: '', icon: ''},
        ]
      },
      {
        id: 3, text: 'POPUPS & MODALS', icon: 'caret', isExpanded: true, children: [
          {id: 301, text: 'Dialog', link: '', icon: ''},
          {id: 301, text: 'Tooltip', link: '', icon: ''},
          {id: 301, text: 'Snackbar', link: '', icon: ''},
        ]
      }
    ];
  }

}
