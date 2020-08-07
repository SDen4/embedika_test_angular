import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  response: any;
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.http.get('https://reqres.in/api/users/')
    .subscribe((response)=>{
      this.response = response;
      console.log(this.response);
    })
  }
}