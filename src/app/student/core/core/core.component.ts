import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Signout(){
    localStorage.removeItem('user');
    this.router.navigate(["/signin"]);  
  }


}
