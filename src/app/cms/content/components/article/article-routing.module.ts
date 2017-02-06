import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ArticleListComponent },
  { path: 'add', component: ArticleDetailComponent },
  { path: ':id/edit', component: ArticleDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule { }

export const routedComponents = [ArticleListComponent, ArticleDetailComponent];