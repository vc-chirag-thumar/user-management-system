import { Injectable } from '@angular/core';
import { User, UserList } from '../core/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserListService {
   userList:UserList[] = [];
   url:string = 'http://localhost:3000/user';
  httpClient: any;
  
  constructor(private http:HttpClient) {}

  getUserData(): Observable<any> {
   return this.http.get(this.url);
  }
  
  postUserData(params:User): Observable<any> {
    return this.http.post(this.url, params);
  }
  deleteData(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
}


