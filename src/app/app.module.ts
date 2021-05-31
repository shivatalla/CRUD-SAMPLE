import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AdminGuard } from './guards/admin.guard';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GenderPipe } from './shared/gender.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SignInComponent,
    GenderPipe
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    AdminModule,
    TeacherModule,
    StudentModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule, 
    MatButtonModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[GenderPipe],
  providers: [AdminGuard],
  bootstrap: [AppComponent]
 

})
export class AppModule { }
