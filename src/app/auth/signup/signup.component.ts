import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User, UserList } from 'src/app/core/models/user.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  // variables
  user: User = 
    {
      fullname: '',
      email: '',
      password: '',
    };
  userList: UserList[] = [];
  hide = true; 
  
  //constructor (services)
  constructor(private http: HttpClient) {
    
  }
  
  //angular hooks
  ngOnInit():void {
    this.http
  .get('http://localhost:3000/userList')
  .subscribe((res: UserList[]) => {
    this.userList = res
  })
  }
  
  
  //functions
  submit(form:NgForm):void {
    // localStorage.setItem('myLSkey', JSON.stringify(form.value));
    // console.log(localStorage.getItem('myLSkey'));
    this.userList.push(form.value);
    console.log(this.userList);
    form.reset();
  }

 
}

