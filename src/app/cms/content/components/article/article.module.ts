import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CuiModule } from '../../../../lib';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    CuiModule,
    
    ArticleRoutingModule
  ],
  declarations: [ArticleListComponent, ArticleDetailComponent]
})
export class ArticleModule { }
