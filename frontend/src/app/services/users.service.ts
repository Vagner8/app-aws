import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User {
  userId: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>('http://localhost:5000/users');
  }

  createUser(user: Partial<User>) {
    return this.http.post<User>('http://localhost:5000/users/new', user);
  }

  deleteUser(userId: number) {
    return this.http.delete<User>('http://localhost:5000/users/delete', {
      body: { userId },
    });
  }
}
