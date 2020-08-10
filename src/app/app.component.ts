import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { UsersService } from "./users.service";


const itemsPerPage: number = 3;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})

export class AppComponent implements OnInit {
  title = 'embedika-test';

  public active = '';
  public index = '';
  public searchStr = '';

  public usersLength: number;
  public page: number;

  public users: Array<any>;
  // users = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.page = 1;

    this.users = this.usersService.users
    this.usersService.getUsers(this.page, itemsPerPage).subscribe(users => {
      this.users = users;
      console.log(this.users);
      this.usersLength = users.length;
      console.log(this.usersLength);
    })
  }

  receiveFromChild(e){
    this.active = e[0];
    this.index = e[1];
  }

  @Output() public outToParent2 = new EventEmitter();
}