import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { CoreComponent } from './core/core.component';


@NgModule({
  declarations: [ProfileComponent, CoreComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
