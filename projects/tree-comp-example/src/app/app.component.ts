import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IConfigTree, IConfigTreeData } from '../../../tree-comp/src/lib/IConfigTree';
import { TreeCompComponent } from '../../../tree-comp/src/public-api';

@Component({
  selector: 'app-root',
  imports: [TreeCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tree-comp-example';
  randomId = () => Math.floor(Math.random() * 1000000);
  configureData: IConfigTreeData[] = [
    {
      name: 'Hemiptera',
      id: this.randomId(),
      icon: 'folder',
      children: [
        {
          name: 'Miridae',
          icon: 'lab_profile',
          id: this.randomId(),
          children: [
            { name: 'Kanakamiris', id: this.randomId(), children: [] },
            {
              name: 'Neophloeobia',
              id: this.randomId(),
              children: [{ name: 'incisa', id: this.randomId(), children: [] }],
            },
          ],
        },
      ],
    },
    {
      name: 'Lepidoptera',
      icon: 'description',
      id: this.randomId(),
      children: [
        {
          name: 'Nymphalidae',
          id: this.randomId(),
          children: [
            {
              name: 'Ephinephile',
              id: this.randomId(),
              children: [
                { name: 'rawnsleyi', id: this.randomId(), children: [] },
              ],
            },
          ],
        },
      ],
    },
  ];
  configTree: IConfigTree = {
    arrowIcon: 'chevron_right',
    arrowIconFlag: true,
    htmlIcon: false,
    icon: false,
    expand: true,
    addIconFlag: true,
  };

  check() {
    console.log(this.configureData);
  }
}
