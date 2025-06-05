import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<string[]>('https://jsonplaceholder.typicode.com/users');
  }
}
