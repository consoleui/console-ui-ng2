import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FixedLayoutComponent } from './fixed-layout/fixed-layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarContainerComponent } from './sidebar-container/sidebar-container.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FixedLayoutComponent],
  declarations: [FixedLayoutComponent, HeaderComponent, SidebarComponent, SidebarContainerComponent, NavComponent]
})
export class CuiLayoutsModule { }
