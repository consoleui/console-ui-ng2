import { Component, OnInit } from '@angular/core';

import { Article, ArticleService } from '../../../client';
import { PaginationModel } from '../../../../../lib';

@Component({
  selector: 'cms-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
  providers: [ ArticleService ]
})
export class ArticleListComponent implements OnInit {
  articles: Article[];
  columns;
  pagination: PaginationModel;
  i = 0;
  selected = [];

  constructor(protected articleService: ArticleService) { }

  ngOnInit() {
    this.columns = [
          { title: '序号', prop: 'id' },
          { title: '标题', prop: 'title' },
          { title: '分类', prop: 'cate' },
          { title: '查看', prop: 'views' },
          { title: '评论', prop: 'comments' },
          { title: '作者', prop: 'author' },
          { title: '状态', prop: 'status' },
        ];
    this.pagination = new PaginationModel(95, 10, 5);

    this.articleService.getArticleList().subscribe((articles: Article[]) => {
      //console.log(articles);
      this.articles = articles;
    });
  }

  reload() {
    console.log('reload...' + (this.i++));
    this.articleService.getArticleList().subscribe((articles: Article[]) => {
      //console.log(articles);
      this.articles = articles;
    });
  }

  onSelect(ids) {
    //console.log(ids);
    this.selected = ids;
  }

  batchDelete() {
    if(this.selected.length>0){
      this.articleService.deleteArticles(this.selected).subscribe();
      this.reload();
    }else{
      console.log("没有选择项");
    }
  }

  batchPublish() {
    if(this.selected.length>0){
      this.articleService.publishArticles(this.selected).subscribe();
      this.reload();
    }else{
      console.log("没有选择项");
    }
  }

  batchDisPublish() {
    if(this.selected.length>0){
      this.articleService.disPublishArticles(this.selected).subscribe();
      this.reload();
    }else{
      console.log("没有选择项");
    }
  }
}
