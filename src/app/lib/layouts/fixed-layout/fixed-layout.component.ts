import { Component, OnInit, Input, Output } from '@angular/core';

import { NavItem } from '../nav/defs/api';

@Component({
  selector: 'cui-fixed-layout',
  templateUrl: './fixed-layout.component.html',
  styleUrls: ['./fixed-layout.component.scss']
})
export class FixedLayoutComponent implements OnInit {

  isSidebarFold: boolean = false;
  @Input() sideNavs: NavItem[];

  constructor() { }

  ngOnInit() {
    
  }

}
