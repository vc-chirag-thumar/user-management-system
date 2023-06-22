import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: User = {
    fullname: '',
    email: '',
    password: ''
  };
  submit() {
    console.log(this.user);
  }
  constructor() {
    localStorage.setItem('myLSkey', JSON.stringify(this.user));
    console.log(localStorage.getItem('myLSkey'));

    
  }
  hide = true;
  
  ngOnInit(){ 
    let user = localStorage.getItem('user');
  }

  

}

export interface User {
  fullname: string;
  email: string;
  password:string;

  
}



