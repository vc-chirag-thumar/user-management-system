import { Token } from '@angular/compiler';
import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { UserListService } from 'src/app/services/user-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit  {
  person = {
    isEdit: false,
    id: 0,
    fullname: '',
    email: '',
    password: '',
  };
  hide = true;
  storedUserData:string | null  = "" ;

  constructor(private router: Router, private _userService: UserListService) {
    
  }
  

  ngOnInit() {
    this.getUserData();
  }

 
  getUserData() {
    this.storedUserData = localStorage.getItem('updatedUser');
    console.log(this.storedUserData);
    
    if (this.storedUserData) {
      this.person = JSON.parse(this.storedUserData);
    }
  }
  logout() {
    const confirmation = confirm("Are you sure, You wan't to logout ?");
    if (confirmation) {
      localStorage.removeItem('token');
      localStorage.removeItem('person');
      this.router.navigate(['login']);
    }
  }
}
