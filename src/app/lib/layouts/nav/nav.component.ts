import { Component, OnInit, Input, Output } from '@angular/core';

import { NavItem } from './defs/api';

@Component({
  selector: 'cui-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() navs: NavItem[];

  constructor() { }

  ngOnInit() {
  }

}
