import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-solution2',
  templateUrl: './solution2.component.html',
  styleUrls: ['./solution2.component.css'],
})
export class Solution2Component {
  @Input() node: any = null;

  tree: any = {
    a: ['b', 'c'],
    b: ['d', 'e'],
    c: ['f', 'g'],
    e: ['h', 'i'],
    f: ['j', 'k'],
  };

  ngOnInit() {
    if (!this.node) {
      this.node = 'a';
    }
  }

  getChildren(node: any) {
    return this.tree[node] || [];
  }

  trackChld(item: any) {
    return item;
  }
}
