import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj-example',
  templateUrl: './proj-example.component.html',
  styleUrls: ['./proj-example.component.sass']
})
export class ProjExampleComponent implements OnInit {

  users: string[] = ['arastoo', 'fatemeh', 'parastoo'];

  constructor() { }

  ngOnInit(): void {
  }

}
