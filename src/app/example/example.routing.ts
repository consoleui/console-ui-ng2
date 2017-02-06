import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleComponent } from './example.component';
import { DashboardComponent } from './dashboard';
import { PaginationComponent } from './pagination/pagination.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'example', component: ExampleComponent, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent},
    {
      path: 'content',
      loadChildren: 'app/example/content/content.module#ContentModule'
    }
  ]},
  //{ path: 'dashboard', component: DashboardComponent},
  //{ path: 'pagination', component: PaginationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ExampleRoutingModule { ExampleComponent }

export const routedComponents = [DashboardComponent];