import { Injectable } from '@angular/core';
import { User, UserList } from '../core/models/user.model';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserListService {
   userList:UserList[] = [];
  
  
  constructor(private http:HttpClient) {
    
   }

   

  //  submitForm(f: NgForm):void {
  //   const userList:UserList[] = [];
  //   console.log(f.value);
  //   this.userList.push(f.value);
  //   console.log(this.userList);
  // }

  url:string = 'http://localhost:3000/user';

  getUserData(): Observable<any> {
   return this.http.get(this.url);
  }
  
  postUserData(params:any): Observable<any> {
    const headers = { 'content-type': 'application/json; charset=UTF-8'}
    return this.http.post(this.url, params, {headers})
   }
 
  
  // addMember(f: NgForm) {
  //   this.http.post(`${this.url}`, newUserForm).subscribe(
  //     data => {
  //       console.log('POST Request is successful ', data);
  //     },
  //     error => {
  //       console.log('Error', error);
  //     }
  //   );
  // }
   

  
}


