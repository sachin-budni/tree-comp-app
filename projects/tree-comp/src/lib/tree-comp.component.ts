import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IConfigTree, IConfigTreeData } from './IConfigTree';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tree-comp',
  imports: [CommonModule],
  templateUrl: './tree-comp.component.html',
  styleUrls: ['./tree-comp.component.css'],
  host: {
    class: 'material-symbols-outlined',
  },
})
export class TreeCompComponent {
  @Input() configData: IConfigTreeData[] = [];
  @Input() configTree: IConfigTree = {
    arrowIcon: '',
    arrowIconFlag: false,
    htmlIcon: false,
    icon: false,
    expand: false,
  };
  @Output() selectedItem = new EventEmitter<IConfigTreeData>();
  @Output() addItem = new EventEmitter<IConfigTreeData>();
  @Output() onCheckItem = new EventEmitter<void>();
  addConfig!: IConfigTreeData;
  showPopup: boolean = false;
  selectedId: string | number | undefined;
  constructor() {}
  spanIcon = "<i class='material-icons'>add</i>";

  ngOnInit(): void {
    this.expandAll(this.configData);
  }
  expandAll(arr: IConfigTreeData[]) {
    if (this.configTree.expand) {
      arr.forEach((val) => {
        val.expand = true;
        if (val.children && val.children.length !== 0) {
          this.expandAll(val.children);
        }
      });
    }
  }
  onExpand(item: IConfigTreeData) {
    item.expand = !item.expand;
  }
  onSelected(item: IConfigTreeData) {
    this.selectedId = item.id;
    this.selectedItem.emit(item);
  }
  identify(index: number, item: IConfigTreeData) {
    return item.id;
  }

  onAdd(item: IConfigTreeData) {
    this.addItem.emit(item);
    this.selectedId = item.id;
    item.edit = true;
  }

  onSubmit(item: IConfigTreeData, value: string) {
    item.children?.push({
      id: Math.floor(Math.random() * 100000),
      name: value,
      children: [],
    });
    delete item.edit;
  }
  onCheck() {
    this.onCheckItem.emit();
  }
}
