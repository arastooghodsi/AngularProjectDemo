import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {user} from '../add-user.interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.sass']
})
export class AddUserComponent implements OnInit {

  users: user[] = [
      {
        email: 'a@a.com',
        password: '1234',
        address: '123MainST'
      },
      {
        email: 'b@b.com',
        password: '5678',
        address: '456MainST'
      }
    ];

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onAddUserClicked = new EventEmitter<user[]>();
  constructor() { }

  ngOnInit(): void {
  }

  public onAddUser(email: string, password: string, address: string, event: Event) {
    event.preventDefault();
    // tslint:disable-next-line:one-variable-per-declaration
    let u: user;
    u = {
      email: email,
      password: password,
      address: address
    };
    this.users.push(u);
    this.onAddUserClicked.emit(this.users);
  }

}
