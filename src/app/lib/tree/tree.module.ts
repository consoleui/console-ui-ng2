import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeModule as FiveTreeModule } from 'angular2-tree-component';
import { TREE_ACTIONS, IActionMapping, IActionHandler } from 'angular2-tree-component';
import { ITreeOptions, IAllowDropFn } from 'angular2-tree-component';
import { KEYS } from 'angular2-tree-component';
import { TreeModel } from 'angular2-tree-component';
import { TreeNode } from 'angular2-tree-component';
import { TreeDraggedElement } from 'angular2-tree-component';
import { LoadingComponent } from 'angular2-tree-component';
import { LoadingComponent as DeprecatedLoadingComponent } from 'angular2-tree-component';
//import { TreeComponent } from 'angular2-tree-component';
import { TreeNodeComponent } from 'angular2-tree-component';
import { TreeNodeContent } from 'angular2-tree-component';
import { TreeNodeContent as DeprecatedTreeNodeContent } from 'angular2-tree-component';
import { TreeNodeDropSlot } from 'angular2-tree-component';
import { TreeNodeExpanderComponent } from 'angular2-tree-component';
import { TreeNodeChildrenComponent } from 'angular2-tree-component';
import { TreeDropDirective } from 'angular2-tree-component';
import { TreeDragDirective } from 'angular2-tree-component';
//import { AdHocComponentFactoryCreator } from 'angular2-tree-component';

import { TreeComponent }   from './tree.component';

const exportedDirectives = [
  TreeComponent,
  TreeNodeComponent,
  TreeNodeContent,
  TreeDropDirective,
  TreeDragDirective,
  TreeNodeExpanderComponent,
  TreeNodeChildrenComponent,
  TreeNodeDropSlot
];

export {
  TreeModel,
  TreeNode,
  TreeDraggedElement,
  ITreeOptions,
  TREE_ACTIONS,
  KEYS,
  IActionMapping,
  IActionHandler,
  IAllowDropFn,
  LoadingComponent,
  TreeComponent,
  TreeNodeComponent,
  TreeNodeContent,
  TreeDropDirective,
  TreeDragDirective,
  TreeNodeExpanderComponent,
  TreeNodeChildrenComponent,
  TreeNodeDropSlot
};

@NgModule({
    imports: [
        CommonModule,
        //FiveTreeModule
    ],
    exports: [
        ...exportedDirectives
    ],
    declarations: [
        LoadingComponent,
        ...exportedDirectives
    ],
    providers: [
        TreeDraggedElement
    ],
})
export class TreeModule { }
