import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj-example',
  templateUrl: './proj-example.component.html',
  styleUrls: ['./proj-example.component.sass']
})
export class ProjExampleComponent implements OnInit {

  users: any[] = [
    { name: 'arastoo', id: 1 },
    { name: 'fatemeh', id: 2 },
    { name: 'parastoo', id: 3 }
  ];
  passenger: any;
  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: Event) {
    // alert(cars.name);
    alert((event.target as HTMLSelectElement).value);
  }

}
