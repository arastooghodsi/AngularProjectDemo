import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-video-practice',
  templateUrl: './video-practice.component.html',
  styleUrls: ['./video-practice.component.sass']
})
export class VideoPracticeComponent implements OnInit {

  // users: any[] = [
  //   'usename' = '',
  //   'email' = '',
  //   'country' = '',
  //   'sex' = '',
  //   'job' = ''
  // ];
  genders: string[] = ['آقا', 'خانم'];
  jobs: string[] = ['کارمند', 'آزاد', 'خانه دار', 'بیکار'];
  defaultGender = 'آقا';
  defaultJob = 'کارمند';
  inputForm: FormGroup;

  dropboxInputItem: string;

  selectedCountry: string = 'ایران';
  countries: any[];
  items: SelectItem[];
  item: string;

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
      'info': new FormControl({
        'username': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender': new FormControl(this.defaultGender),
      'job': new FormControl(this.defaultJob)
    });
  }

  // onchange(event: Event) {
  //   // this.dropboxInputItem = this.selectedCountry.toString();
  //   // alert(this.dropboxInputItem);
  //   this.selectedCountry = (event.target as HTMLInputElement).value;
  //   // alert((event.target as HTMLInputElement).value);
  //   // alert((<HTMLInputElement>event.target).value);
  //   alert(this.selectedCountry);
  // }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.inputForm);
    alert(this.inputForm.value.job  );
  }
  //
  // onClick() {
  //   this.inputForm.reset();
  // }

}
