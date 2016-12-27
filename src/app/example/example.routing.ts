import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { ExampleComponent } from './example.component';
import { DashboardComponent } from './dashboard';

const routes: Routes = [
  { path: '', component:  DashboardComponent},
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ExampleRoutingModule { }

export const routedComponents = [DashboardComponent];