import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/core/models/user.model';
import { UserListService } from 'src/app/services/user-list.service';
import {MatDialog} from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/dialogs/delete-dialog/delete-dialog.component';


const COLUMNS_SCHEMA = [
  {
    key: 'id',
    type: 'number',
    label: 'Id',
    disabled: true,
    isAdd:false
  },
  {
    key: 'fullname',
    type: 'text',
    label: 'Full Name',
    isAdd:false
  },
  {
    key: 'email',
    type: 'text',
    label: 'Email',
    disabled: true,
    isAdd:false
  },
  {
    key: 'password',
    type: 'text',
    label: 'Password',
    isAdd:false
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: 'Action'
  },
];



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, AfterViewInit {
  userList: User[] = [
    {
      id: 0,
      fullname: '',
      email: '',
      password: '',
      isEdit:false,
      isAdd:false
    },
  ];
  itemCount = 0;
  length = 0;
  // records: any[] = [];
  userCopy: User | null = null;
  nextId = 1;
  newRow:any

  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  columnsSchema: any = COLUMNS_SCHEMA;
  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _userService: UserListService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getUserList();
  }

  // getUserList():void {
  //   this._userService.getUserData().subscribe((res) => {
  //     this.userList = res;
  //     this.userList = this.userList.map((user: User) => {
  //       return { ...user, isEdit: false };
  //     });
  //     this.dataSource.data = this.userList;
  //     this.itemCount = res.length;
  //   });
  // }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteData(id: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '450px', // Set the width of the dialog
      data: { /* You can pass data to the dialog component if needed */ }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this._userService.deleteData(id).subscribe((record) => {
          this.getUserList();
        });
      }
    });
    
  }

  editRow(row: User) {
    this.userCopy = { ...row };
    this._userService.updateUser(row).subscribe(()=>{
      row.isEdit = !row.isEdit;
    });
  }
  saveData(row: User) {
    this._userService.updateUser(row).subscribe((updatedUser) =>{
      row.isEdit = false;
      localStorage.setItem('updatedUser', JSON.stringify(updatedUser));
      // console.log(localStorage);
    },
    (error) => {
      console.error('An error occurred:', error);
    }
    );
  }
  cancelData(row:User){
    if (this.userCopy) {
      Object.assign(row, this.userCopy);
      row.isEdit = false
      this.userCopy = null;
    }
  }
  
  addRow() {
    
    const newRow = this.prepareNewRow();
    this.dataSource.data.push(newRow);
    this.dataSource.data = [...this.dataSource.data]; // Trigger data source update
  }
  prepareNewRow(): User {
    const newRow: User = {
      id: this.nextId,
      fullname: '',
      email: '',
      password: '',
      isEdit: true,
      isAdd:true
    };
    this.nextId++; // Increment the next available id for the next row
    return newRow;
  }
  getMaxExistingId() {
    const maxId = this.userList.reduce((max, user) => Math.max(max, user.id), 0);
    this.nextId = maxId + 1;
  }
  getUserList(): void {
    this._userService.getUserData().subscribe((res) => {
      this.userList = res;
      this.userList = this.userList.map((user: User) => {
        return { ...user, isEdit: false };
      });
      this.dataSource.data = this.userList;
      this.itemCount = res.length;
      this.getMaxExistingId(); // Call it here to get the maximum existing id
    });
  }
  saveNewRow(newRow:User){
    newRow.isAdd = !newRow.isAdd;
    console.log(newRow);
  }
  
}
