import { IAccount } from './account.interface';

export class AccountsService {
  account: IAccount[] = [
    {name: 'foad', password: '1234'},
    {name: 'ahmad', password: '5678'},
    {name: 'jack', password: '2345'}
  ];

  addAccount(a: IAccount) {
    this.account.push(a);
  }
}
