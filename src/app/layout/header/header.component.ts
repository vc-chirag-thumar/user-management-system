import { Component, OnInit } from '@angular/core';
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
}
