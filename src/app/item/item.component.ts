import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() user;
  private id: number;
  public isOpened = false;
  public obj = [];

  openItem() {
    this.id = this.user.id-1;
    this.isOpened = true;
    this.obj = [this.isOpened, this.id];
    this.outToParent.emit(this.obj);
  }

  @Output() public outToParent = new EventEmitter();
  constructor() {}
  ngOnInit() {}
};