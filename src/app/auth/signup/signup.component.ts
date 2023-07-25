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

  //newUserForm!:UserList[]
  
  
  
  //constructor (services)
  constructor(private _userService:UserListService) {
    
  }
  
  //angular hooks
  ngOnInit():void {
    this._userService.getUserData()
    
  }
  
  
  //functions
  submitForm(param:NgForm):void {
    this._userService.postUserData(param.value)
    .subscribe((data) => {
      console.log('Data send Successfully', data);
      param.reset();
    });      
  }
}

