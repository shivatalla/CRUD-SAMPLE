import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetDataService } from './../../services/get-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any;
 // form: FormGroup;
  errMsg: boolean = false;
  successMsg: boolean = false;
  delMsg: boolean = false;
  submitted: boolean = false;
  data:any;
  btnText:any = 'Add User';
  constructor(
    private _http: HttpClient,
    private _service: GetDataService
  ) { }
 
  roles: any[] = [
    { value: 'Admin', viewValue: 'Admin' },
    { value: 'Teacher', viewValue: 'Teacher' },
    { value: 'Student', viewValue: 'Student' }
  ];
  form = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required])
  });
  get f() {
    return this.form.controls;
  }
  ngOnInit(): void {    
    this.getUsers(); 
  }
 
  getUsers() {
    this._service.getUsers().subscribe(user => {
      this.users = user;      

    },
    error => {     
      this.errMsg = true;
    })
  };
  
    createUser() {
      if(this.btnText === 'Add User'){
     
      this.submitted = true;
      // console.log(this.form.value);
      this._service.createUser(this.form.value).subscribe((res: any) => {
       // console.log(res);
        this.getUsers();
      this.successMsg = true;
      },
        (      error: any) => {
        this.errMsg = true;
      }
    );
      this.form.reset();
    }
  //Update  
else{
  //this.form.value['id']  = localStorage.getItem('id');
  console.log("###", this.form.value);
  this._service.updateUser(this.form.value).subscribe(res =>{
    console.log("@@@@", res);
    this.getUsers();
    this.form.reset({});
    this.btnText = 'Add User'
    this.successMsg = true;
  },
   error => {     
    this.errMsg = true;
  })
}
    }
  //Edit
  editUser(userid){
   //this.form.value['id'] = userid;
  //localStorage.setItem('id', userid);
    debugger;
   this._service.editUsers(userid).subscribe((res: any) =>{
    this. data = res;
   // console.log("%%%%%%", this.data);
   this.btnText = 'Update User';
    this.form.setValue({
      id:this.data.id,
      name: this.data.name,
      gender: this.data.gender,
      role: this.data.role
    });
    },
     (    error: any) => {
      this.errMsg = true;    
   });
   
  }
  delete(id){
    this._service.deleteUser(id).subscribe((user: any) =>{},
      (      error: any) => {
        this.errMsg = true;
      });
    this.getUsers();
    this.delMsg = true;
  }

}

