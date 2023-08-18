import { Token } from '@angular/compiler';
import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { UserListService } from 'src/app/services/user-list.service';
import {MatDialog} from '@angular/material/dialog';
import { LogoutDialogComponent } from 'src/app/dialogs/logout-dialog/logout-dialog.component';

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

  constructor(private router: Router, private _userService: UserListService, public dialog: MatDialog) {
    
  }
  

  ngOnInit() {
    this.getUserData();
  }

 
  getUserData() {
    this.storedUserData = localStorage.getItem('person');
    console.log(this.storedUserData);
    
    if (this.storedUserData) {
      this.person = JSON.parse(this.storedUserData);
    }
  }
  logout() {
    const dialogRef = this.dialog.open(LogoutDialogComponent, {
      width: '450px' 
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result === true) {
        localStorage.removeItem('token');
        localStorage.removeItem('person');
        this.router.navigate(['login']);
      }
    });
  }
}
