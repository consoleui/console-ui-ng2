import { Inject, Injectable, Optional } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Response, RequestOptions, RequestOptionsArgs } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Article } from '../model';
import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class ArticleService {
    protected basePath = "http://localhost:8083/api/";
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if(basePath){
            this.basePath = basePath;
        }
        if(configuration){
            this.configuration = configuration;
        }
    }

    public getArticleList(): Observable<Array<Article>> {
        const path = this.basePath + 'article/list';
        return this.http.get(path)
            .map((response: Response) => {
                if(response.status == 204){
                    return undefined;
                }else{
                    return response.json().content;
                }
            });
    }

    public getArticle(id: number): Observable<Article> {
        const path = this.basePath + 'article/' + id;
        return this.http.get(path)
            .map((response: Response) => {
                if(response.status == 204){
                    return undefined;
                }else{
                    return response.json();
                }
            });
    }

    public saveArticle(article: Article): Observable<Article> {
        const path = this.basePath + 'article/save';
        return this.http.post(path, article)
            .map((response: Response) => {
                if(response.status == 204){
                    return undefined;
                }else{
                    return response.json();
                }
            });
    }

    public deleteArticle(id: number): Observable<any> {
        const path = this.basePath + 'article/' + id + '/delete';
        return this.http.delete(path)
            .map((response: Response) => {
               return response.status == 200;
            });
    }

    public deleteArticles(ids: number[]): Observable<any> {
        const path = this.basePath + 'article/delete';
        
        //let queryParameters = new URLSearchParams();
        // queryParameters.set('ids', );
        let requesOptions: RequestOptionsArgs = new RequestOptions({
            body: ids
        });
        
        return this.http.delete(path, requesOptions)
            .map((response: Response) => {
               return response.status == 200;
            });
    }

    public publishArticles(ids: number[]): Observable<any> {
        const path = this.basePath + 'article/publish';

        let requesOptions: RequestOptionsArgs = new RequestOptions({
            body: ids
        });
        
        return this.http.put(path, ids)
            .map((response: Response) => {
               return response.status == 200;
            });
    }

    public disPublishArticles(ids: number[]): Observable<any> {
        const path = this.basePath + 'article/disPublish';

        let requesOptions: RequestOptionsArgs = new RequestOptions({
            body: ids
        });
        
        return this.http.put(path, ids)
            .map((response: Response) => {
               return response.status == 200;
            });
    }
    
}