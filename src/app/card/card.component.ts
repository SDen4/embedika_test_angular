import { Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss', '../item/item.component.scss']
})

export class CardComponent implements OnChanges {
  @Input() users;
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
    this.title = this.users[this.index].first_name + " " + this.users[this.index].last_name;
    this.id = this.users[this.index].id;
    this.email = this.users[this.index].email;
    this.firstName = this.users[this.index].first_name;
    this.lastName = this.users[this.index].last_name;
    this.avatar = this.users[this.index].avatar
  }

  closeCard() {
    this.isOpened = false;
    this.outToParent.emit(this.isOpened);
  }

  @Output() public outToParent = new EventEmitter();
};