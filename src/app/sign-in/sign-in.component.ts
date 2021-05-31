import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  userType: string;
  local:any;
  errMsg:boolean = false;
  constructor(private  router:Router) { }

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
   
  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    debugger;
    console.log(this.form.value);
  
    if(this.form.value.name == 'Admin' && this.form.value.password == 'Admin@123') {
      this.local = localStorage.setItem('user', 'Admin');
      this.router.navigate(['/admin/profile']);
    }
    else if(this.form.value.name == 'Teacher' && this.form.value.password == 'Teacher@123') {
      this.local = localStorage.setItem('user', 'Teacher');
      this.router.navigate(['/teacher/profile']);
    }
    else if(this.form.value.name == 'Student' && this.form.value.password == 'Student@123') {
      this.local = localStorage.setItem('user', 'Student');
      this.router.navigate(['/student/profile']);
    }
    else{
      // this.router.navigate(['/notfound']);
      this.errMsg = true;
      return false

    }
    console.log(JSON.stringify(localStorage.getItem('user')));
  }
  ngOnInit(): void {
  }

}
