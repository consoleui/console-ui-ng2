import { Component, OnInit, Input, Output } from '@angular/core';

import { Category, CategoryService } from '../../../client';

@Component({
  selector: 'cms-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
  providers: [ CategoryService ]
})
export class CategoryDetailComponent implements OnInit {
  @Input() category: Category;

  constructor(protected categoryService: CategoryService) { }

  ngOnInit() {
    if(!this.category){
      this.category = new Category();
    }
  }

  public save() {
    this.categoryService.save(this.category).subscribe((category: Category) => {this.category = category});
  }

  public delete() {
    if(this.category.id){
      this.categoryService.delete(this.category.id).subscribe();
    }
  }

}
