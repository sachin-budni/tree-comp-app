export interface IConfigTreeData {
    name: string;
    id: string | number;
    icon?: string;
    children?: IConfigTreeData[];
    data?: any;
    selected?: boolean;
    expand?: boolean;
    edit?: boolean;
  }
  export interface IConfigTree {
    arrowIconFlag?: boolean;
    arrowIcon?: string;
    iconFlag?: boolean;
    htmlIcon?: boolean;
    expand?: boolean;
    icon?: boolean;
    addIconFlag?: boolean;
  }
  