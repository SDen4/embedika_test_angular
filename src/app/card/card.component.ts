import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss', '../item/item.component.scss']
})

export class CardComponent implements OnChanges {
  @Input() response;
  @Input() index: number;
  @Input() isOpened: boolean;
  title: string;
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;

  constructor() {}

  ngOnChanges() {
    this.title = this.response.data[this.index].first_name + " " + this.response.data[this.index].last_name;
    this.id = this.response.data[this.index].id;
    this.email = this.response.data[this.index].email;
    this.firstName = this.response.data[this.index].first_name;
    this.lastName = this.response.data[this.index].last_name;
    this.avatar = this.response.data[this.index].avatar
  }

  closeCard() {
    this.isOpened = false;
    this.outToParent.emit(this.isOpened);
  }

  @Output() public outToParent = new EventEmitter();
};