import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-proj-example',
  templateUrl: './proj-example.component.html',
  styleUrls: ['./proj-example.component.sass']
})
export class ProjExampleComponent implements OnInit {

  @Input() ratings: number[] = [4.5, 2, 3, 1.5, 5, 3.5];
  @Input() rating: number = 4.5;
  @Output() starClicked = new EventEmitter<number>();
  widthh: number = 65;

  constructor() {
  }

  ngOnInit(): void {
    this.widthh = this.rating * (65 / 5);
  }

  public onClick() {
    this.starClicked.emit(this.rating);
  }

}
