import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Article, ArticleService } from '../../../client';

@Component({
  selector: 'cms-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
  providers: [ ArticleService ]
})
export class ArticleDetailComponent implements OnInit {
  article: Article;

  constructor(protected articleService: ArticleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.article = new Article();

    let params = this.route.snapshot.params;
    if(params['id']){
      this.articleService.getArticle(+params['id']).subscribe((article: Article) => this.article = article);
    }
  }

  public save() {
    let article = this.article;
    // TODO: validate
    this.articleService.saveArticle(article)
      .subscribe((article: Article) => {
        this.article = article;
        // TODO: Alert info on page template.
        console.log("保存成功");
      });
  }

  public saveAndNext() {
    this.save();
    this.article = new Article();
  }

  public delete() {
    let article = this.article;
    if(article && article.id) {
      this.articleService.deleteArticle(article.id)
        .subscribe((ok) => {
          if(ok) {
            console.log('文章"[${article.id}]${article.title}"删除成功！');
            // 跳转到列表
            this.router.navigate(['/cms/content/article/list']);
          }else{
            console.error('文章"[${article.id}]${article.title}"删除失败！');
          }
        });
    }
  }
}
