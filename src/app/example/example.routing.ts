import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { ExampleComponent } from './example.component';
import { DashboardComponent } from './dashboard';
import { PaginationComponent } from './pagination/pagination.component';

const routes: Routes = [
  { path: '', component:  DashboardComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'pagination', component: PaginationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ExampleRoutingModule { }

export const routedComponents = [DashboardComponent];