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
    id:0,    
    fullname: '',
    email: '',
    password: '',
  };
  userList: UserList[] = [];
  // obj = {
  //   email: '',
  //   password: '',
  // };
  hide = true;
  formValue = {
    email: '',
    password: '',
  };
  isLoggedIn:boolean = true

  constructor(private _userService: UserListService, private router: Router) {}

  ngOnInit(): void {
    this._userService.getUserData().subscribe((data) => {
      this.userList = data;
    });
  }

  submitForm(param: NgForm):boolean | void {
    
    this.formValue = param.value;
    const person = this.userList.find(x => x.email === this.formValue.email && x.password === this.formValue.password);
    console.log(person);
    if (person){
      console.log('valid Person');
      this.isLoggedIn = true;
      this.router.navigate(['/dashboard']);
      
    } else{
     this.isLoggedIn = false;
    }
    param.reset();
  }
  isAuthenticated(): boolean {
    console.log(this.isLoggedIn);
    
    return this.isLoggedIn;
  }

}
