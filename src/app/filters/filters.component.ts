import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Observable } from "rxjs";
import { filter } from 'rxjs/operators/';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnChanges{
  @Input() users;
  @Input() email;
  @Input() item;
  searchStr = "";
  count = 0;

  ngOnChanges() {
    // console.log(this.email);
    // return this.count = this.email.pipe(filter(function (check) {
    //   return check['selected'];
    // }).length);
  }

  // $scope.selectedCounter = $scope.documents.filter(function(item1){
  //   return item1.selected;
  // }).length;

  constructor() {}
  ngOnInit() {}
}