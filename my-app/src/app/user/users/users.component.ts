import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../interfaces/user.interface';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  standalone: false,
})
export class UsersComponent implements OnInit {
  allUsers: User[] = [];
  searchTerm: string = '';

  private _filterUsers = new BehaviorSubject<User[]>([]);
  set filteredUsers(users: User[]) {
    this._filterUsers.next(users);
  }
  get filteredUsers$(): Observable<User[]> {
    return this._filterUsers.pipe(
      map((users) => {
        if (this.searchTerm) {
          return users.filter((user) =>
            user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
          );
        }
        return users;
      })
    );
  }

  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.getUsers().subscribe((users: any) => {
      this.allUsers = users;
      this.filteredUsers = this.allUsers;
      console.log('Users fetched:', this.allUsers);
    });
  }
}
