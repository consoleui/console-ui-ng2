import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isSidebarFold: boolean = false;
  @Output() isSidebarFoldChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.isSidebarFold = !this.isSidebarFold;
    this.isSidebarFoldChange.emit(this.isSidebarFold);
  }

}
