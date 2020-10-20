import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { IAccount  } from '../account.interface';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.sass']
})
export class AddAccountComponent implements OnInit {

  @ViewChild('username') username;
  @ViewChild('password') password;

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
  }

  addNewAccount() {
    let a: IAccount = {name: this.username.nativeElement.value, password: this.password.nativeElement.value};
    this.accountsService.addAccount(a);
    console.log("from add new account component");
    console.log(this.accountsService.account);
  }

}
