import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user-interface';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  // tslint:disable-next-line:typedef
  createDb() {
    const users = [
      {
        id: 1,
        username: 'arastoo',
        phoneNumber: '9188198549',
        pass: '123',
        score: 1241
      },
      {
        id: 2,
        username: 'mahdi',
        phoneNumber: '9389920976',
        pass: '123',
        score: 1582
      },
      {
        id: 3,
        username: 'fatemeh',
        phoneNumber: '9375383343',
        pass: '123',
        score: 1658
      }
      ,
      {
        id: 4,
        username: 'jonedelam',
        phoneNumber: '9215943905',
        pass: '123',
        score: 1748
      }
      ,
      {
        id: 5,
        username: 'parastoo',
        phoneNumber: '9190228831',
        pass: '123',
        score: 1562
      }
      ,
      {
        id: 6,
        username: 'mahdi',
        phoneNumber: '9151028938',
        pass: '123',
        score: 1634
      }
      ,
      {
        id: 7,
        username: 'bahman',
        phoneNumber: '9196550540',
        pass: '123',
        score: 1439
      }
      ,
      {
        id: 8,
        username: 'masome',
        phoneNumber: '9196550370',
        pass: '123',
        score: 1147
      }
    ];
    return {users};
  }

  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
  }

}
