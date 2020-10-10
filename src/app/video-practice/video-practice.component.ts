import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-video-practice',
  templateUrl: './video-practice.component.html',
  styleUrls: ['./video-practice.component.sass']
})
export class VideoPracticeComponent implements OnInit {

  genders: string[] = ['آقا', 'خانم'];
  jobs: string[] = ['کارمند', 'آزاد', 'خانه دار', 'بیکار'];
  defaultGender = 'آقا';
  defaultJob = 'کارمند';
  inputForm: FormGroup;

  selectedCountry: string;
  countries: any[];
  isSubmitted = false;

  country: any;

  constructor() {
    this.countries = [
      {name: 'استرالیا', code: 'AU'},
      {name: 'برزیل', code: 'BR'},
      {name: 'چین', code: 'CN'},
      {name: 'مصر', code: 'EG'},
      {name: 'فرانسه', code: 'FR'},
      {name: 'آلمان', code: 'DE'},
      {name: 'هند', code: 'IN'},
      {name: 'ژاپن', code: 'JP'},
      {name: 'اسپانیا', code: 'ES'},
      {name: 'ایلات متحده', code: 'US'}
    ];
  }

  ngOnInit(): void {
    //noinspection TypeScriptValidateTypes
    this.inputForm = new FormGroup({
      // 'info': new FormControl({
        username: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      // }),
      gender: new FormControl(this.defaultGender),
      job: new FormControl(this.defaultJob),
      country: new FormControl(null, [Validators.required]),
      colors: new FormArray([])
      // withdraw: new FormArray([])
    });
  }

  onChange(event) {
    this.country = (event.target as HTMLSelectElement);
    // alert(event.name.value);
    // alert("dsfdfsd");
  }


  // tslint:disable-next-line:typedef
  onSubmit() {
    this.isSubmitted = true;
    console.log(this.inputForm);
    console.log(this.inputForm.value.username);
    console.log(this.inputForm.value.email);
    console.log(this.inputForm.value.gender);
    console.log(this.inputForm.value.job);
    console.log(this.inputForm.value.country.name);
    // alert(this.inputForm.value.country.name);

    // this.inputForm.reset();
    console.warn(this.inputForm.value);
    // console.log(this.inputForm.value.withdraw);
  }

  onAddColorsClick() {
    const control = new FormControl(null);
    this.myColors.push(control);
    // this.controls().push(control1);
  }

  // onAddWhithdrawClick() {
  //   const withdrawControl = new FormControl(null);
  //   this.myWithdraw.push(withdrawControl);
  // }

  get myColors() {
    return this.inputForm.get('colors') as FormArray;
  }

  // get myWithdraw() {
  //   return this.inputForm.get('withdraw') as FormArray;
  // }

}
