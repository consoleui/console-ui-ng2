import { NgModule } from '@angular/core';

import { CuiButtonModule }   from './button/index';
import { CuiLayoutsModule } from './layouts/index';
import { PaginationModule } from './pagination/index';
import { DataTableModule } from './data-table/index';
import { TreeModule } from './tree/index';

const CUI_MODULES = [
    CuiButtonModule,
    CuiLayoutsModule,
    PaginationModule,
    DataTableModule,
    TreeModule
];

@NgModule({
    imports: [
        CuiButtonModule,
        CuiLayoutsModule,
        PaginationModule,
        DataTableModule,
        TreeModule
    ],
    exports: [
        ...CUI_MODULES
    ],
    declarations: [],
    providers: [],
})
export class CuiModule { }
