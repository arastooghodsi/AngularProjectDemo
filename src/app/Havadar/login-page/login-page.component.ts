import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {User} from '../../user-interface';
import {UserService} from '../../user.service';
import {debounce, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  inputForm: FormGroup;

  robatCheck = false;
  formValid = false;
  users$: Observable<User>;
  // tslint:disable-next-line:ban-types
  phoneTerm: string;
  searchTerm$ = new Observable<User>();
  user: User;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.inputForm = new FormGroup({
      phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      pass: new FormControl(null, Validators.required),
      // check: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.inputForm + '+++');
    this.phoneTerm = this.inputForm.get('phoneNumber').value;
    console.log(this.phoneTerm + '***');
    console.log(this.phoneTerm + '...');
    this.getUser(this.inputForm.get('phoneNumber').value);
  }

  getUser(phone: string) {
    this.userService.getUser(phone).subscribe(
      // tslint:disable-next-line:no-unused-expression
      (user: User) => {
        this.users$;
      }
    );
    console.log((this.user as User).score);
  }

}
