import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User, UserList } from 'src/app/core/models/user.model';
import { UserListService } from 'src/app/services/user-list.service';


const COLUMNS_SCHEMA = [
  {
    key: "id",
    type: "number",
    label: "Id",
    disabled: false
  },
  {
      key: "fullname",
      type: "text",
      label: "Full Name"
  },
  {
      key: "email",
      type: "text",
      label: "Email",
      disabled: false
  },
  {
      key: "password",
      type: "text",
      label: "Password"
  },
  {
    key: "isEdit",
    type: "isEdit",
    label: "Action"
  }
]

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, AfterViewInit {
  user: User = {
    id: 0,
    fullname: '',
    email: '',
    password: '',
    isEdit:false
  };
  userList: UserList[] = [
    {
      id: 0,
      fullname: '',
      email: '',
      password: '',
    },
  ];
  itemCount = 0;
  records: any[] = [];

  

  // displayedColumns: string[] = [
  //   'id',
  //   'fullname',
  //   'email',
  //   'password',
  //   'action',
  // ];
  

  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  columnsSchema: any = COLUMNS_SCHEMA;
  dataSource = new MatTableDataSource<UserList>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  // user: any;

  constructor(private _userService: UserListService) {}

  

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this._userService.getUserData().subscribe((data) => {
      this.userList = data;
      this.dataSource.data = this.userList;
      this.itemCount = data.length;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteData(id: number) {
    console.log(this.user.id);
    this._userService.deleteData(id).subscribe((record) => {
      this.getUserList();
    });
  }

  editRow(row: User) {
    this._userService.updateUser(row).subscribe(() => row.isEdit = false);
  }
  
}
