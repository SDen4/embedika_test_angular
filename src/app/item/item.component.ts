import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() user;
  isMarked = false;

  openItem() {
    console.log("it works!!!");
    this.isMarked = !this.isMarked;
    this.outToParent.emit(this.isMarked);
  }

  @Output() public outToParent = new EventEmitter();

  constructor() {}
  ngOnInit() {}
};