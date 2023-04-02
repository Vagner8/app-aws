import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  createUser(user: Partial<User>) {
    return this.http.post<User>(`${environment.apiUrl}/users/new`, user);
  }

  deleteUser(userId: number) {
    return this.http.delete<User>(`${environment.apiUrl}/users/delete`, {
      body: { userId },
    });
  }
}
