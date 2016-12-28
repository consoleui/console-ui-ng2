import { NgModule } from '@angular/core';

import { CuiButtonModule }   from './button/index';
import { CuiLayoutsModule } from './layouts/index';
import { PaginationModule } from './pagination/index';
import { DataTableModule } from './data-table/index';

const CUI_MODULES = [
    CuiButtonModule,
    CuiLayoutsModule,
    PaginationModule,
    DataTableModule
];

@NgModule({
    imports: [
        CuiButtonModule,
        CuiLayoutsModule,
        PaginationModule,
        DataTableModule
    ],
    exports: CUI_MODULES,
    declarations: [],
    providers: [],
})
export class CuiModule { }
