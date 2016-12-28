export interface NavItem {
    id: number | string;
    text: string;
    link?: string;
    icon?: string;
    children?: NavItem[];

    isParent?: boolean;
    isExpanded?: boolean;
}