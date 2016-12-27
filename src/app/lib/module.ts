import { NgModule } from '@angular/core';

import { CuiButtonModule }   from './button/index';
import { CuiLayoutsModule } from './layouts/index';
import { PaginationModule } from './pagination/index';

const CUI_MODULES = [
    CuiButtonModule,
    CuiLayoutsModule
];

@NgModule({
    imports: [
        CuiButtonModule,
        CuiLayoutsModule
    ],
    exports: CUI_MODULES,
    declarations: [],
    providers: [],
})
export class CuiModule { }
