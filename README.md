# TreeComp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0.

This library supports only 19 version of angular

# Installation

```bash
npm i tree-comp
```

# Integration

```bash
import { TreeCompComponent } from 'tree-comp';

@Component({
  imports: [TreeCompComponent],
})
```
OR

```bash
@NgModule({
  imports: [TreeCompComponent],
})

```

```bash
<app-tree-comp
  [configData]="configureData"
  [configTree]="configTree"
>
</app-tree-comp>

```

# IConfigTree

Tree configuration for custom icon to display.

Add and remove the custom functionality.
```bash

configTree: IConfigTree = {
    arrowIcon: 'chevron_right', // adding icon name
    arrowIconFlag: true, // hide the arrow icon
    htmlIcon: false, // 
    icon: false, // hide title icon
    expand: true, // initial expand the all tree
    addIconFlag: true, // add icon functionality
};

```
# IConfigTreeData

Tree data format 

```bash

 IConfigTreeData {
    name: string; // name for display
    id: string | number; // id to handle array
    icon?: string; // if require to display the beside of name
    children?: IConfigTreeData[]; // Add children to this object
    data?: any; // handle any data
    selected?: boolean; // selected object
    expand?: boolean; // initial expand given tree
    edit?: boolean; // edit function to add
}

```


