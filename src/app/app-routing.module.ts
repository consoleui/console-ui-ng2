import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'path', component: AppComponent },
  { path: '', children: [
      //{ path: 'example', loadChildren: 'app/example/example.module#ExampleModule'},
      //{ path: 'cms', loadChildren: 'app/cms/cms.module#CmsModule'},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [AppComponent];