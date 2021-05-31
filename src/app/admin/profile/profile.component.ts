import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name:string = 'Alex Morrision';
  user:any =localStorage.getItem('user');
  constructor() { }

  ngOnInit(): void {
  }

}
