import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Input() responseSearch;
  @Input() index: number;
  @Input() email;
  searchStr = "";

  constructor() {}
  ngOnInit() {}
}