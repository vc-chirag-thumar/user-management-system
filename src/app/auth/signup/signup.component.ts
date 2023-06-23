import { Component, OnInit } from '@angular/core';

type User = Array<{ fullname: string; email: string; password: string }>;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  user: User = [
    {
    fullname: '',
    email:  '',
    password: ''
  }
]

  


  

  submit() {
    
  }

  constructor() {
    localStorage.setItem('myLSkey', JSON.stringify(this.user));
    console.log(localStorage.getItem('myLSkey'));

    
  }

  hide = true;
  
  ngOnInit() {}

}


export interface Users {
  fullname: string;
  email: string;
  password:string;
}





