import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'embedika-test';

  response: any;
  public searchStr = '';
  public active = '';
  public index = '';

  constructor(private http: HttpClient) {
  }
  
  receiveFromChild(e){
    this.active = e[0];
    this.index = e[1];
  }

  @Output() public outToParent2 = new EventEmitter();

  ngOnInit() {
    this.http.get('https://reqres.in/api/users/')
    .subscribe((response)=>{
      this.response = response;
    })
  }
}