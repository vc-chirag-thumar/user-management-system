import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User, UserList } from 'src/app/core/models/user.model';
import { UserListService } from 'src/app/services/user-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  // variables
  user: User = 
    {
      id: 0,
      fullname: '',
      email: '',
      password: ''
    };
  userList: UserList[] = [];
  hide = true;
  
  //constructor (services)
  constructor(private _userService:UserListService, private router: Router) {}
  
  //angular hooks
  ngOnInit():void {
    this._userService.getUserData().subscribe((data) => {
      this.userList = data;
    });
  }
  
  //functions
  submitForm(param:NgForm):void {
    this._userService.postUserData(param.value)
    .subscribe((data) => {});
    this.router.navigate(['/login']);
    param.reset();
  }
}

