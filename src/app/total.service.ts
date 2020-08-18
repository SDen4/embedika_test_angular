import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable()
export class TotalService {
    constructor(private http: HttpClient) {}
    public totalCount: any;
    private usersUrl: string = 'https://reqres.in/api/users/';
    
    public getTotalUsers() {
        this.totalCount =  this.http.get(this.usersUrl)
        .pipe(map(result=>result['data']));
        return this.totalCount;
    }
}