import { Component, DoCheck, OnInit } from '@angular/core';
import { LoggingService } from './loggingService';
import { IAccount } from './account.interface';
import { AccountsService } from './accounts.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, DoCheck {

  accounts: IAccount[] = [];
  message = "HelloWorld";

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {}

  ngOnInit() {
    this.loggingService.logMessage(this.message);
    this.accounts = this.accountsService.account;
  }

  ngDoCheck() {
    console.log("from app component");
    console.log(this.accountsService.account);
  }

  public onStarClicked(rating: number) {
    console.log('The rating ${rating} is clicked')
  }

}
