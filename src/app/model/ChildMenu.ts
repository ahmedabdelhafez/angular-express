export interface ChildMenu {
    id?: number;
    name?: string;
    icon?: string;
    link?: string;
    bgColor?: String;
    childmenu?: ChildMenu[];
}