import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  message = "HelloWorld";

  constructor() {}

  ngOnInit() {
  }

  public onStarClicked(rating: number) {
    console.log('The rating ${rating} is clicked')
  }

}
