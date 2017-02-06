import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CuiModule } from './lib';

import { CmsModule } from './cms/cms.module';
import { ExampleModule } from './example/example.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CuiModule,
    AppRoutingModule,
    CmsModule,
    ExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
