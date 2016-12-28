import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { ContentComponent } from './name.component';
import { DataTableDemoComponent } from './data-table-demo/data-table-demo.component';

const routes: Routes = [
  { path: '', redirectTo: 'data-table', pathMatch: 'full' },
  { path: 'data-table', component: DataTableDemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule { }

export const routedComponents = [DataTableDemoComponent];