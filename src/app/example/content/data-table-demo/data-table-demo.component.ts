import { Component, OnInit } from '@angular/core';

import { PaginationModel } from '../../../lib';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

//import 'mockjs/dist/mock.js';
//var Mock = require('mockjs');

@Component({
  selector: 'cui-data-table-demo',
  templateUrl: './data-table-demo.component.html',
  styleUrls: ['./data-table-demo.component.scss']
})
export class DataTableDemoComponent implements OnInit {
  columns;
  datas;
  pagination: PaginationModel;
  showMixSearch: boolean = false;

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.columns = [
      { title: 'ID', prop: 'id' },
      { title: 'TITLE', prop: 'title' },
      { title: 'Views', prop: 'views' },
      { title: 'Comments', prop: 'comments' }
    ];

    //console.log(data.articles);
    //this.datas = data.articles;
    //console.log(data);
    /*var xx = this.http.get('http://q.com')
      .map(result => {
        console.log(1);
        //console.log(result);
        return result.json().articles;
      });
      xx.subscribe(bb => {console.log(bb)});
      var xx = this.http.get('http://localhost:8083/api/article/list')
        .toPromise().then(res => {console.log(res)}).catch(()=>{});*/

    //var xx = this.http.get('app/abc/bbc')
    //  .toPromise().then(res => {console.log(res)}).catch(()=>{});
    var xx = this.http.get('http://q.com/list')
      .toPromise().then(res => { 
        this.datas = res.json().articles;
        //console.log(this.datas);
       }).catch(() => { });

    /*this.datas = [
      { id: 10, title: '学习编程-先养成良好的习惯', views: 1878, comments: 1679 },
      { id: 20, title: '如何举一反三快速学习编程语言', views: 1878, comments: 1679 },
      { id: 30, title: '面向领域的问题解决办法', views: 1878, comments: 1679 },
      { id: 40, title: '语言不是万能的', views: 1878, comments: 1679 },
      { id: 50, title: '代码编写之道', views: 1878, comments: 1679 },
      { id: 60, title: '道法可以普及，但修成大道的却寥寥无几（论天赋的重要性）', views: 1878, comments: 1679 },
    ];*/

    this.pagination = new PaginationModel(95, 10, 5);
  }

  reload() {
    this.datas.forEach((record, index, datas) => {
      record.id = record.id + 100;
    });
  }

}
