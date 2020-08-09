import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Input() responseSearch;
  @Input() email;
  @Input() item;
  searchStr = "";

  // checkedCount(){
  //   return 
  // }

  constructor() {}
  ngOnInit() {}
}