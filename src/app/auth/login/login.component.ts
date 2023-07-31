import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor(private _userService: UserListService) {}

  ngOnInit(): void {
    this._userService.getUserData().subscribe((data) => {
      this.userList = data;
    });
  }

  submitForm(param: NgForm):boolean | void {
    this.formValue = param.value;

    for (let user of this.userList) {
      if (user.email === this.formValue.email && user.password === this.formValue.password) {
        this.obj = { ...user};
        console.log(this.obj);
      }
    }
    param.reset();
  }
}
