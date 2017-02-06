import { Component, OnInit } from '@angular/core';

import { TreeNode, TreeComponent, ITreeOptions } from '../../../../lib';

import { Category, CategoryService } from '../../client';

@Component({
  selector: 'cms-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [ CategoryService ]
})
export class CategoryComponent implements OnInit {

  nodes: Category[];
  treeOptions: ITreeOptions;

  selectedNode: Category;

  constructor(protected categoryService: CategoryService) { }

  ngOnInit() {
    this.nodes = [
      {
        id: -1,
        name: '根分类',
        hasChildren: true
      }
    ];

    this.treeOptions = {
      // getChildren: (node: TreeNode) => { }
      getChildren: this.getChildren.bind(this)
    };
  }

  private getChildren(node: TreeNode) {
    var children = [];
    this.categoryService.getChildren(node.data.id).subscribe((categories: Category[]) => {
      children = categories;
    });
    return children;
  }

  addNode(cateTree) {
  }

  onActivate(event) {
    console.log(event);
    this.selectedNode = event.node.data;
  }
}
