import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TreeModule } from '../../../../lib';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    TreeModule,

    CategoryRoutingModule,
  ],
  declarations: [CategoryComponent, CategoryDetailComponent]
})
export class CategoryModule { }
