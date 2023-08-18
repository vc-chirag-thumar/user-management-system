import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { UserListService } from 'src/app/services/user-list.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userList: User[] = [];
  hide = true;
  isLoggedIn = true;
  isSuccess = false

  user: User = {
    isEdit:true,
    id: 0,
    fullname: '',
    email: '',
    password: '',
    isAdd:false
  };

  formValue = {
    email: '',
    password: '',
  };

  constructor(private _userService: UserListService, private router: Router) {}

  ngOnInit(): void {
    this._userService.getUserData().subscribe((data) => {
      this.userList = data;
    });
  }

  submitForm(param: NgForm): boolean | void {
    this.formValue = param.value;
    const person = this.userList.find(
      (x) =>
        x.email === this.formValue.email &&
        x.password === this.formValue.password
    );

    if (person) {
      localStorage.setItem('person', JSON.stringify(person));
      localStorage.setItem('token', Math.random().toString());
      this.isLoggedIn = true;
      this.isSuccess = true;
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 1000);
    }
    else {
      this.isLoggedIn = false;
    }
    param.reset();
  }
}
