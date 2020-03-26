import { ChildMenu } from './ChildMenu';

export interface MenuItems {
    id?: number;
    name?: string;
    icon?: string;
    link?: string;
    bgColor?: String;
    childmenu?: MenuItems[];
}