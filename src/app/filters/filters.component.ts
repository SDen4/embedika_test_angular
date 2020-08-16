import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  public chosenArrs: Array<any> = [];

  constructor(private totalService: TotalService) {};
  ngOnInit() {
    this.usersTotalLength = this.totalService.totalCount['email'];
  }

  checked(email: string, event: any) {
    // array of chosen emails
    this.chosenArrs.push(email);
    if(this.chosenArrs.length > 1) {
      for(let i = 0; i < this.chosenArrs.length-1; i++) {
        if(this.chosenArrs[i] === email) {
          this.chosenArrs.splice(i,1);
          this.chosenArrs.splice(this.chosenArrs.length-1, 1);
        };
      };
    };
    this.outToParentChosenUsers.emit(this.chosenArrs);

    // counting chosen checkboxes
    let arrOfEmails = document.getElementsByClassName('filters__choose');
    this.count  = Array.prototype.filter.call(arrOfEmails, function (check) {
      return check.checked;
    }).length;
  
    console.log(this.chosenArrs);
  }
  @Output() public outToParentChosenUsers = new EventEmitter();
}