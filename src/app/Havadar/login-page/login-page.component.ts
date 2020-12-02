import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  @Output() item = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addNewItem() {
    // @ts-ignore
    this.item.emit(this.newItem);
  }

}
