import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { IAccount  } from '../account.interface';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.sass']
})
export class AddAccountComponent implements OnInit {

  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
  }

  addNewAccount() {
    let a: IAccount = {name: this.username.nativeElement.value, }
  }

}
