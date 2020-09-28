import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-video-practice',
  templateUrl: './video-practice.component.html',
  styleUrls: ['./video-practice.component.sass']
})
export class VideoPracticeComponent implements OnInit {

  genders: string[] = ['آقا', 'خانم'];
  defaultGender = 'آقا';
  inputForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.inputForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl('آقا')
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.inputForm);
  }
  //
  // onClick() {
  //   this.inputForm.reset();
  // }

}
