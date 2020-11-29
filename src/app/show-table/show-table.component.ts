import { Component, OnInit } from '@angular/core';
import {User} from '../user-interface';

@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.sass']
})
export class ShowTableComponent implements OnInit {

  users: User[] = [
    {
      username: 'arastooarastooarast',
      score: 1241
    },
    {
      username: 'fatemeh',
      score: 1582
    },
    {
      username: 'fatemeh',
      score: 1582
    }
    ,
    {
      username: 'fatemeh',
      score: 1582
    }
    ,
    {
      username: 'fatemeh',
      score: 1582
    }
    ,
    {
      username: 'fatemeh',
      score: 1582
    }
    ,
    {
      username: 'fatemeh',
      score: 1582
    }
    ,
    {
      username: 'fatemeh',
      score: 1582
    }
  ];

  tableHeaders: any[] = [
    '#',
    'نام کاربری',
    'امتیاز'
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
