import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  name: string;
  email: string;
} 

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  save(user: Partial<User>) {
    return this.http.post('http://localhost:4000/test', user)
  }
}
