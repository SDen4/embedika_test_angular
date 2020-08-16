import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Observable } from "rxjs";
import { filter } from 'rxjs/operators/';
import { TotalService } from "../total.service";


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit{
  @Input() usersTotalLength;
  @Input() item;
  public searchStr = "";
  count: number = 0;

  constructor(private totalService: TotalService) {};
  ngOnInit() {
    this.usersTotalLength = this.totalService.totalCount['email'];
  }

  checked(event: any) {
    let chosenArrs = [];
    let arrOfEmails = document.getElementsByClassName('filters__choose');
    this.count  = Array.prototype.filter.call(arrOfEmails, function (check) {
      return check.checked;
    }).length;
    // consonle.log();
  }
}