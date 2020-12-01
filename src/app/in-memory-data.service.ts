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
        username: 'arastooarastooarast',
        score: 1241
      },
      {
        id: 2,
        username: 'fatemeh',
        score: 1582
      },
      {
        id: 3,
        username: 'fatemeh',
        score: 1582
      }
      ,
      {
        id: 4,
        username: 'fatemeh',
        score: 1582
      }
      ,
      {
        id: 5,
        username: 'fatemeh',
        score: 1582
      }
      ,
      {
        id: 6,
        username: 'fatemeh',
        score: 1582
      }
      ,
      {
        id: 7,
        username: 'fatemeh',
        score: 1582
      }
      ,
      {
        id: 8,
        username: 'fatemeh',
        score: 1582
      }
    ];
    return {users};
  }

  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
  }

}
