import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() user;
  @Input() index: number;
  isOpened = false;
  obj = [];
  

  openItem() {
    this.isOpened = true;
    this.obj = [this.isOpened, this.index];
    // this.outToParent.emit(this.index);
    // this.outToParent.emit(this.isOpened);
    this.outToParent.emit(this.obj);
    console.log(this.obj);
  }

  @Output() public outToParent = new EventEmitter();
  constructor() {}
  ngOnInit() {}
};