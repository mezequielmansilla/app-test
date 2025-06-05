import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { UserItemComponent } from './user-item/user-item.component';

@NgModule({
  declarations: [UsersComponent, UserItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [UsersComponent],
  providers: [UserService],
})
export class UserModule { }
