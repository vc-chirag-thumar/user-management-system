import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserList } from 'src/app/core/models/user.model';
import { UserListService } from 'src/app/services/user-list.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User = {
    fullname: '',
    email: '',
    password: '',
  };
  userList: UserList[] = [];
  obj = {
    email: '',
    password: '',
  };
  hide = true;
  formValue = {
    email: '',
    password: '',
  };
  isLoggedIn = false;

  constructor(private _userService: UserListService, private router: Router) {}

  ngOnInit(): void {
    this._userService.getUserData().subscribe((data) => {
      this.userList = data;
    });
  }

  submitForm(param: NgForm):boolean | void {
    this.formValue = param.value;
    const user = this.userList.find(x => x.email === this.formValue.email && x.password === this.formValue.password);
    console.log(user);
    if (user){
      console.log('invalid user');
      this.router.navigate(['dashboard']);
    } else {
      console.log('Email and Password match');
    }


    // for (let user of this.userList) {
    //   if (user.email === this.formValue.email && user.password === this.formValue.password) {
    //     this.obj = { ...user};
    //     console.log(this.obj);
    //     this.isLoggedIn = true;
    //     console.log(this.isLoggedIn);
    //   }
    //   console.log(this.isLoggedIn);
    // }
    param.reset();
  }
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
