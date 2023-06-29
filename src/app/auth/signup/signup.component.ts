import { Component, OnInit } from '@angular/core';
import { User, UserList } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
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
  constructor() {
    
  }
  
  //angular hooks
  ngOnInit() {
    
    
  }
  
  
  //functions
  submit() {
    localStorage.setItem('myLSkey', JSON.stringify(this.user));
    console.log(localStorage.getItem('myLSkey'));
    this.userList.push(this.user);
  }

}

