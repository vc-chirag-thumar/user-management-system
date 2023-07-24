import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User, UserList } from 'src/app/core/models/user.model';
import { UserListService } from 'src/app/services/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userList: UserList[] = [];

  displayedColumns: string[] = ['fullname', 'email', 'password'];
  dataSource = new MatTableDataSource<UserList>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private _userService: UserListService) {}

  ngOnInit() {
    this._userService.getUserData().subscribe((data) => {
      console.log(data);
      this.dataSource = data;
    });
    this.dataSource.paginator = this.paginator;
  }
}
