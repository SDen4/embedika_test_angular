import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { TablePage } from './table-page';

@Injectable()
export class UsersService {

    public users: Array<any>;
    private usersUrl: string = 'https://reqres.in/api/users/';

    constructor(private http: HttpClient) {}

    public getUsers(page:number, itemsPerPage:number): Observable<TablePage> {
        var users =  this.http.get<any[]>(this.usersUrl)
        .pipe(map(res=>res['data']));
        return this.getPageItems(users, page, itemsPerPage);
    }

    private getPageItems(users: Observable<Array<any>>, page:number, itemsPerPage:number): Observable<TablePage> {
        return users.pipe(
            map(u=>{
                var startIndex = itemsPerPage * (page - 1);
                return new TablePage( u.length, u.slice(startIndex, startIndex + itemsPerPage) );
            })
        );
    }
}