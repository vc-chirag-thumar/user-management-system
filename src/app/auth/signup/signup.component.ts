import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User, UserList } from 'src/app/core/models/user.model';
import { HttpClient } from '@angular/common/http';
import { UserListService } from 'src/app/services/user-list.service';

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

  newUserForm!:UserList[]
  
  
  
  //constructor (services)
  constructor() {
    
  }
  
  //angular hooks
  ngOnInit():void {
    
  }
  
  
  //functions
  submit(f: NgForm):void {
    this.userList.push(f.value);
    console.log(this.userList);
    f.resetForm();
    
  }

 
}

