import {Component, Input, OnInit} from '@angular/core';
import {user} from '../add-user.interface';

@Component({
  selector: 'app-show-user-table',
  templateUrl: './show-user-table.component.html',
  styleUrls: ['./show-user-table.component.sass']
})
export class ShowUserTableComponent implements OnInit {

  @Input() users: user[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
