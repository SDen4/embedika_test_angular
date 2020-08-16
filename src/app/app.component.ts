import { Component, OnInit, OnChanges } from '@angular/core';
import { UsersService } from "./users.service";
import { TotalService } from "./total.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService, TotalService]
})

export class AppComponent implements OnInit {
  title = 'embedika-test';

  public active = '';
  public index = '';
  public searchStr = '';
  public usersLength: number;
  public usersTotalLength: Array<any> = [];
  public page: number = 1;
  public pages: Array<any> = [];
  public users: Array<any>;
  public itemsPerPage: number = 5;

  public searchUsersValue: Array<any> = [];

  private numsOfPages: number;
  private idx: number = 1;

  constructor(private usersService: UsersService, private totalService: TotalService) {
    this.loadPage();
  }

  onPageChanged(e:any) {
    this.loadPage();
  }

  private loadPage(){
    this.users = this.usersService.users;
    this.usersService.getUsers(this.page, this.itemsPerPage).subscribe(page => {
      this.users = page.rows;
      this.usersLength = page.totalCount;
    })
  }

  receiveFromChild(e: Array<any>){
    this.active = e[0];
    this.index = e[1];
  }

  receiveChosenUsers(e: Array<any>) {
    this.searchUsersValue = e;
    console.log(this.searchUsersValue);
    this.loadPage();
  }

// pagination's buttons actoins
  pageChange(idx: number, event: any) {
    event.preventDefault();
    this.idx = idx+1;
    this.page = idx+1;
    this.loadPage();
  }

  pageChangeNext(event: any) {
    event.preventDefault();
    if(this.page < this.pages.length) {
      this.page = this.page + 1;
      this.loadPage();
    }
  }

  pageChangePrev(event: any) {
    event.preventDefault();
    if(this.page > 1) {
      this.page = this.page - 1;
      this.loadPage();
    }
  }

  ngOnInit() {
    this.totalService.getTotalUsers().subscribe(l => {
      this.usersTotalLength = l;
      this.numsOfPages = Math.ceil(this.usersTotalLength.length / this.itemsPerPage);
      for (let i = 1; i <= this.numsOfPages ; i++) {
        this.pages.push(i);
      }
    });
  }
}