import { Component, Input, EventEmitter, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'embedika-test';

  response: any;
  public string2 = '';
  constructor(private http: HttpClient) {
  }
  
  receiveFromChild(evnt){
    this.string2 = evnt;
    console.log(this.string2);
  }

  @Output() public outToParent2 = new EventEmitter();


  ngOnInit() {
    this.http.get('https://reqres.in/api/users/')
    .subscribe((response)=>{
      this.response = response;
      console.log(this.response);
    })
  }

  searchStr = ''
}