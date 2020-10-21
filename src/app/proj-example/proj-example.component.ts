<<<<<<< HEAD
import {Component, OnInit} from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> eeeca0cea58a551bd90218f603a31a16b18eeddc

@Component({
  selector: 'app-proj-example',
  templateUrl: './proj-example.component.html',
  styleUrls: ['./proj-example.component.sass']
})
export class ProjExampleComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    const massage = 'Hello World';
    console.log(massage);
  }



}
