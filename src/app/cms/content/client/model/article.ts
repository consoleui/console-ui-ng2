
//export interface Article {
export class Article {
    id?: number;
    title?: string;
    alias?: string;
    digest?: string;
    content?: string;
    thumbnail?: string;
    status?: ArticleStatus;
    
    category?: string;

    views?: number;
    comments?: number;
}


export enum ArticleStatus {
    DRAFT = <any>'DRAFT',
    PENDING = <any>'PENDING',
    PUBLISHED = <any>'PUBLISHED'
}