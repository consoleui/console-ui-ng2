import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixedLayoutComponent } from './fixed-layout/fixed-layout.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [FixedLayoutComponent],
  declarations: [FixedLayoutComponent, HeaderComponent]
})
export class CuiLayoutsModule { }
