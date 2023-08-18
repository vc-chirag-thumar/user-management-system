import { Injectable } from '@angular/core';
import { User } from '../core/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  
  userList: User[] = [];
  url: string = 'http://localhost:3000/user';
  httpClient: any;

  constructor(private http: HttpClient) {}

  getUserData() {
    return this.http.get<User[]>(this.url);
  }

  postUserData(params: User) {
    return this.http.post<User>(this.url, params);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  updateUser(user: User): Observable<User> {
    return this.http.patch<User>(`${this.url}/${user.id}`, user);
  }
  getMaxId(id: number) {
    return this.http.get<User[]>(`${this.url}/${id}`); // Adjust the URL accordingly
  }
}
