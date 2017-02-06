import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //{ path: 'path', component: ContentComponent },
  { path: '',  children: [
      {path: 'article', loadChildren: 'app/cms/content/components/article/article.module#ArticleModule'},
      {path: 'category', loadChildren: 'app/cms/content/components/category/category.module#CategoryModule'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule { }

export const routedComponents = [];