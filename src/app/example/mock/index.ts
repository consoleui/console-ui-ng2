import { InMemoryDbService } from 'angular-in-memory-web-api';

var Mock = require('mockjs');

export class ExampleMockData implements InMemoryDbService {
    createDb(){
        var data = Mock.mock({
            'articles|200': [{
                'id|+1': 1,
                'title': '@ctitle(6, 20)',
                'views': '@integer(60, 100)',
                'comments': '@integer(30, 50)'
            }]
        });

        return {'abc/bbc': {'bbc': {'ccc': 234}}};
    }
}