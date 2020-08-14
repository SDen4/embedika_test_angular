import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Observable } from "rxjs";
import { filter } from 'rxjs/operators/';
import { UsersService } from "../users.service";


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit{
  @Input() users;
  // @Input() email;
  @Input() item;
  searchStr = "";
  count: number = 0;

  constructor(private usersService: UsersService) {}
  ngOnInit() {
    this.users = this.usersService.users['email']
  }

  ngOnChanges() {
    // console.log(this.email);
    // this.count = this.users.filter(function (check) {
    //   return check['selected'];
    // }).length;
  }

  // $scope.selectedCounter = $scope.documents.filter(function(item1){
  //   return item1.selected;
  // }).length;
}