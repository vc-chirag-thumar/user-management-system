import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  person = {
    id:0,
    fullname: '',
    email: '',
    password: ''
  };
  hide = true;

  constructor(private router:Router){}

  ngOnInit() {
    this.getUserData();
  }
  getUserData(){
    const storedUserData = localStorage.getItem('person');
    if (storedUserData) {
      this.person = JSON.parse(storedUserData);
      console.log(this.person);
    }
  }
  logout(){
    const confirmation = confirm("Are you sure, You wan't to logout ?");
    if(confirmation){
      localStorage.removeItem('token');
      localStorage.removeItem('person');
      this.router.navigate(['login']);
    }
  }
}
