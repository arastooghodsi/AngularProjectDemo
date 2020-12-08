import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {User} from '../../user-interface';
import {UserService} from '../../user.service';
import {debounce, debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  constructor(private userService: UserService) { }

  inputForm: FormGroup;
  robatCheck = false;
  formValid = false;
  users$: Observable<User[]>;
  phoneTerm;
  private searchPhone = new Subject<string>();

  search;

  // search(phoneTerm: number): void {
  //   this.searchPhone.next(phoneTerm);
  // }

  ngOnInit(): void {
    this.inputForm = new FormGroup({
      phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      pass: new FormControl(null, Validators.required),
      check: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.inputForm);
    this.phoneTerm = this.inputForm.get('phoneNumber').value;
    console.log(this.phoneTerm);
    this.searchPhone.next(this.phoneTerm);
    console.log(this.phoneTerm);
    console.log(this.searchPhone);
    this.searchUser();
  }

  searchUser(): void {
    this.users$ = this.searchPhone.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((phoneTerm: string) => this.userService.searchUsers(this.phoneTerm, '123')),
    );
    // if (this.users$) {
    //   alert('Yes');
    // }
    console.log(this.users$);
  }

}
