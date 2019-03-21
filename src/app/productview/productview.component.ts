import { Component, OnInit } from '@angular/core';
// import { EventEmitter, Output  } from '@angular/core';



@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css'],
  // template: `<button class='btn btn-primary' (click)="valueChanged()">Click me</button> `
})
export class ProductviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
// export class ProductviewComponent {
//   @Output() valueChange = new EventEmitter();
//   counter = 0;
//   valueChanged() { // You can give any function name
//       this.counter = this.counter + 1;
//       this.valueChange.emit(this.counter);
//   }
// }


