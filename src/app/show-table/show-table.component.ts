import { Component, OnInit } from '@angular/core';
import {User} from '../user-interface';
import {UserService} from '../user.service';

@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.sass']
})
export class ShowTableComponent implements OnInit {

  // users: User[] = [
  //   {
  //     id: 1,
  //     username: 'arastooarastooarast',
  //     score: 1241
  //   },
  //   {
  //     id: 2,
  //     username: 'fatemeh',
  //     score: 1582
  //   },
  //   {
  //     id: 3,
  //     username: 'fatemeh',
  //     score: 1582
  //   }
  //   ,
  //   {
  //     id: 4,
  //     username: 'fatemeh',
  //     score: 1582
  //   }
  //   ,
  //   {
  //     id: 5,
  //     username: 'fatemeh',
  //     score: 1582
  //   }
  //   ,
  //   {
  //     id: 6,
  //     username: 'fatemeh',
  //     score: 1582
  //   }
  //   ,
  //   {
  //     id: 7,
  //     username: 'fatemeh',
  //     score: 1582
  //   }
  //   ,
  //   {
  //     id: 8,
  //     username: 'fatemeh',
  //     score: 1582
  //   }
  // ];

  users: User[];

  tableHeaders: any[] = [
    '#',
    'نام کاربری',
    'امتیاز'
    ];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    this.userService.getUsers().subscribe(users => this.users = users);
  }

}
