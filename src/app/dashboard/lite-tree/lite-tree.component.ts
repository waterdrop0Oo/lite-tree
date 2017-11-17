import { Component, OnInit, Input } from '@angular/core';
import { debug } from 'util';

@Component({
  selector: 'app-lite-tree',
  templateUrl: './lite-tree.component.html',
  styleUrls: ['./lite-tree.component.scss']
})
export class LiteTreeComponent implements OnInit {

  // @Input() TreeInfo: any;

  @Input() treeInfo = [];

  constructor() { }

  ngOnInit() {
  }

  itemClicked(item) {
    this.checkRecursively(item);
    this.checkToParentRecursively(item);
  }

  // 翻转子节点状态
  checkRecursively(item) {
    if (item.children && item.children.length > 0) {
      item.children.forEach(element => {
        element.checked = item.checked;
        this.checkRecursively(element);
      });
    }
  }

  // 判断祖先是否应该翻转
  checkToParentRecursively(item) {
    if (item.parent) {
      // 判断是否应该勾上父亲
      // 当有没上勾的孩子，则父亲也不勾
      if (item.parent.children.find((child) => !child.checked)) {
        item.parent.checked = false;
        // 灭勾所有祖先
        let tempItem = item;
        while (tempItem.parent) {
          tempItem.parent.checked = false;
          tempItem = tempItem.parent;
          // TODO:以前补上中间状态（就是孩子没有全勾时，就让父亲显示为中间待定状态）
        }
      } else {
        // 全部孩子上勾了，那么父亲也上勾
        item.parent.checked = true;
        this.checkToParentRecursively(item.parent);
      }
    }
  }

  childrenAllChecked(item) {

  }
  // 判断是否改变父亲状态
  // item.parent.filter(element=>element.checked===item.checked).length===item.parent.length? item的状态赋给父亲:未定状态
  // 要递归往祖先方向推，改变祖先的状态
}
