import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { User } from './user-interface';
import { catchError} from 'rxjs/operators';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/debounce';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/switchMap';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'api/users';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      catchError(this.handleError<User[]>([]))
    );
  }

  getUser(phoneNumber: string): Observable<User> {
    const url = `${this.usersUrl}/${(phoneNumber)}`;
    return this.http.get<User>(url).pipe(
      catchError(this.handleError<User>())
    );
  }


}
