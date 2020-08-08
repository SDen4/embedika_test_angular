import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss', '../item/item.component.scss']
})

export class CardComponent {
  // @Input() user;
  @Input() isMarked;


  closeCard() {
    this.isMarked = false;
    this.outToParent.emit(this.isMarked);
  }

  @Output() public outToParent = new EventEmitter();

  constructor() {}
  ngOnInit() {}

};