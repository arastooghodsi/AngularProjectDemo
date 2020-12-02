import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  colorToggle: any;
  backgroundColorToggle: any;

  items = 'جستجو';
  constructor() { }

  ngOnInit(): void {
  }

  addItem(items: string) {
    this.items = items;
  }
}
