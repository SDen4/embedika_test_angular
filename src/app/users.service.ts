import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
    users = [];

    constructor(private http: HttpClient) {}

    getUsers(page:number, itemsPerPage:number) {
        return this.http.get('https://reqres.in/api/users/')
        .pipe(map(res=>res['data']));
        // var users = this.http.get('https://reqres.in/api/users/')
        // .pipe(map(res=>res['data']));
        // return this.getPageItems(users, page, itemsPerPage);
    }

    // private getPageItems(users: Observable<Array<any>>, page:number, itemsPerPage:number): {
    //     return users;
    // }
}