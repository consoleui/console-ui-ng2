import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

import { ExampleModule } from './app/example/example.module';
import { CmsModule } from './app/cms/cms.module';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

//platformBrowserDynamic().bootstrapModule(ExampleModule);
//platformBrowserDynamic().bootstrapModule(CmsModule);
platformBrowserDynamic().bootstrapModule(AppModule);
