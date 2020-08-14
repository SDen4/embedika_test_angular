import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from "./users.service";

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
  public page: number = 1;
  public users: Array<any>;
  public itemsPerPage: number = 5;
  public pages: Array<any> = [1,2]; // temp!!!!!!

  constructor(private usersService: UsersService) {
    this.loadPage();
    console.log(this.page)
  }

  pageChange(idx: number, event: any) {
    event.preventDefault();
    this.page = idx+1;
    this.loadPage();
  }

  onPageChanged(e:any) {
    this.loadPage();
  }

  private loadPage(){
    this.users = this.usersService.users
    this.usersService.getUsers(this.page, this.itemsPerPage).subscribe(page => {
      this.users = page.rows;
      console.log(this.users);
      this.usersLength = page.totalCount;
    })
  }

  receiveFromChild(e: Array<any>){
    this.active = e[0];
    this.index = e[1];
  }

  ngOnInit() {}
}