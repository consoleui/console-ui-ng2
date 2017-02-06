
export interface CmsConfig {
    appNav?: any[]
}

export var CMS_CONFIG = {
    appNav: [
        { id: 1, text: '仪表盘', link: 'dashboard', icon: 'dashboard' },
        {
            id: 2, text: '内容管理', icon: 'caret', isExpanded: true, children: [
                { id: 201, text: '文章管理', link: 'content/article', icon: 'file-text-o' },
                { id: 202, text: '分类管理', link: 'content/category', icon: 'folder-open-o' },
                { id: 202, text: '标签管理', link: '/tag', icon: 'tags' }
            ]
        },
        {
            id: 2, text: '站点配置', icon: 'caret', isExpanded: true, children: [
                { id: 201, text: '菜单管理', link: '/menu', icon: 'list-alt' },
                { id: 202, text: '模板管理', link: '/template', icon: 'file-code-o' }
            ]
        }
    ]
};