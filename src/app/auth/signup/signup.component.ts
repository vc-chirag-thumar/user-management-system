import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User, UserList } from 'src/app/core/models/user.model';
import { HttpClient } from '@angular/common/http';
import { UserListService } from 'src/app/services/user-list.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  // variables
  user: User = 
    {
      fullname: '',
      email: '',
      password: '',
    };
  userList: UserList[] = [];
  hide = true; 
  form: any;
  router: any;
  ngZone: any;
  UserListService: any;
  
  //constructor (services)
  constructor(private http: HttpClient) {
    
  }
  
  //angular hooks
  ngOnInit():void {
    this.http.get('http://localhost:3000/posts').subscribe(res => {
      console.log('res', res)
    })
  }
  
  
  //functions
  submit(form:NgForm):void {
    this.UserListService.CreateUser(this.form.value).subscribe((res: any) => {
      console.log('Issue added!');
      this.ngZone.run(() => this.router.navigateByUrl('/user'));
      this.userList.push(form.value);
    console.log(this.userList);
    form.reset();
    });

    // localStorage.setItem('myLSkey', JSON.stringify(form.value));
    // console.log(localStorage.getItem('myLSkey'));
    
  }

 
}

