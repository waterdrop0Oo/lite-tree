import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit, AfterViewInit {

  treeInfo = [
    {
      text: '001',
      value: '001',
      checked: false,
      collapsed: false,
      disabled: false,
      parent: null,
      children: [
        {
          text: '001-1',
          value: '001-1',
          checked: false,
          collapsed: false,
          disabled: false,
          parent: null,
          children: [
            {
              text: '001-1-1',
              value: '001-1-1',
              checked: false,
              collapsed: false,
              disabled: false,
              parent: null,
              children: [
                {
                  text: '001-1-1-1',
                  value: '001-1-1-1',
                  checked: false,
                  collapsed: false,
                  disabled: false,
                  parent: null,
                  children: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      text: '002',
      value: '002',
      checked: false,
      collapsed: false,
      disabled: false,
      parent: null,
      children: [
        {
          text: '002-1',
          value: '002-1',
          checked: false,
          collapsed: false,
          disabled: false,
          parent: null,
          children: [],
        },
        {
          text: '002-2',
          value: '002-2',
          checked: false,
          collapsed: false,
          disabled: false,
          parent: null,
          children: [
            {
              text: '002-2-1',
              value: '002-2-1',
              checked: false,
              collapsed: false,
              disabled: false,
              parent: null,
              children: [],
            }
          ],
        }
      ],
    },
    {
      text: '003',
      value: '003',
      checked: true,
      collapsed: false,
      disabled: false,
      parent: null,
      children: [],
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.treeInfo.forEach(parent => {
      this.setParent(parent);
    });

    console.log('寻父成功:');
    console.log(this.treeInfo);
  }

  ngAfterViewInit(): void {

  }

  // 赋予子节点以父亲节点的信息（以空间换时间）
  setParent(parent) {
    parent.children.forEach(child => {
      child.parent = parent;
      if (child.children.length > 0) {
        this.setParent(child);
      }
    });
  }

}
