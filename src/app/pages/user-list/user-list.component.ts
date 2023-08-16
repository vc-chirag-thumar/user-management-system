import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User, UserList } from 'src/app/core/models/user.model';
import { UserListService } from 'src/app/services/user-list.service';

const COLUMNS_SCHEMA = [
  {
    key: 'id',
    type: 'number',
    label: 'Id',
    disabled: true
  },
  {
    key: 'fullname',
    type: 'text',
    label: 'Full Name',
  },
  {
    key: 'email',
    type: 'text',
    label: 'Email',
    disabled: true
  },
  {
    key: 'password',
    type: 'text',
    label: 'Password',
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: 'Action',
  },
];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, AfterViewInit {
  userList: UserList[] = [
    {
      id: 0,
      fullname: '',
      email: '',
      password: '',
      isEdit:false
    },
  ];
  itemCount = 0;
  length = 0;
  records: any[] = [];
  userCopy: UserList | null = null;
  

  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  columnsSchema: any = COLUMNS_SCHEMA;
  dataSource = new MatTableDataSource<UserList>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _userService: UserListService) {}

  ngOnInit() {
    this.getUserList();
  }

  getUserList():void {
    this._userService.getUserData().subscribe((res:any) => {
      this.userList = res;
      this.userList = this.userList.map((user: UserList) => {
        return { ...user, isEdit: false };
      });
      this.dataSource.data = this.userList;
      this.itemCount = res.length;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteData(id: number) {
    this._userService.deleteData(id).subscribe((record) => {
      this.getUserList();
    });
  }

  editRow(row: User) {
    this.userCopy = { ...row };
    this._userService.updateUser(row).subscribe(()=>{
      row.isEdit = !row.isEdit
    });
  }
  saveData(row: User) {
    this._userService.updateUser(row).subscribe(() =>{
      row.isEdit = false
    });
  }
  cancelData(row:User){
    if (this.userCopy) {
      Object.assign(row, this.userCopy);
      row.isEdit = false
      this.userCopy = null;
    }
  }
}
