import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { CoreComponent } from './core/core.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [UserListComponent, ProfileComponent, UserRoleComponent, CoreComponent ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule, ReactiveFormsModule,
     MatInputModule, MatButtonModule,
     MatSelectModule, MatRadioModule 
     
  ],
  exports:[UserListComponent, ProfileComponent, UserRoleComponent]
})
export class AdminModule { }
