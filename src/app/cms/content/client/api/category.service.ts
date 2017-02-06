import { Inject, Injectable, Optional } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Response, RequestOptions, RequestOptionsArgs } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Category } from '../model';

@Injectable()
export class CategoryService {
    protected basePath = "http://localhost:8083/api/";

    constructor(protected http: Http) { }

    public getChildren(parentId: number): Observable<Array<Category>> {
        let path = this.basePath + "category/children";
        if (parentId && parentId > 0) {
            path += "?parentId=" + parentId;
        }
        return this.http.get(path)
            .map((response: Response) => {
                return response.json();
            });
    }

    public save(category: Category): Observable<Category> {
        let path = this.basePath + "category/save";
        return this.http.post(path, category)
            .map((response: Response) => {
                return response.json();
            });
    }

    public delete(id: number): Observable<any> {
        let path = this.basePath + "category/" + id + "/delete";

        let requestOptions: RequestOptionsArgs = new RequestOptions();
        //requestOptions.body = id;

        return this.http.delete(path, requestOptions)
            .map((response: Response) => {
                return response.json();
            });
    }
}