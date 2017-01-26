var Mock = require('mockjs');

Mock.mock('http://q.com/list', {
    'articles|15': [{
        'id|+1': 1,
        'title': '@ctitle(6, 20)',
        'views': '@integer(60, 100)',
        'comments': '@integer(30, 50)'
    }]
});