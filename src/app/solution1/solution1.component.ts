import { Component } from '@angular/core';

@Component({
  selector: 'app-solution1',
  templateUrl: './solution1.component.html',
  styleUrls: ['./solution1.component.css'],
})
export class Solution1Component {
  tree: any = {
    a: ['b', 'c'],
    b: ['d', 'e'],
    c: ['f', 'g'],
    e: ['h', 'i'],
    f: ['j', 'k'],
  };
  list: any = [];

  getTabs(item: string, level: number): string {
    let indent = '';
    for (let i = 0; i < level; i++) {
      indent += `\xa0\xa0\xa0\xa0\xa0\xa0`;
    }
    return indent + '-' + item;
  }

  getData(item: string, level: number) {
    if (item == 'a') this.list.push('a');
    else this.list.push(this.getTabs(item, level));

    const children = this.tree[item];
    if (!children) {
      return;
    }
    for (const child of children) {
      this.getData(child, level + 1);
    }
  }

  ngOnInit() {
    this.getData('a', 0);
    console.log(this.list);
  }
}
