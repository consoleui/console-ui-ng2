import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixedLayoutComponent } from './fixed-layout/fixed-layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarContainerComponent } from './sidebar-container/sidebar-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [FixedLayoutComponent],
  declarations: [FixedLayoutComponent, HeaderComponent, SidebarComponent, SidebarContainerComponent]
})
export class CuiLayoutsModule { }
