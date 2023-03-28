import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UsersService } from '../services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private usersService: UsersService) {}
  users$?: Observable<User[]>;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.users$ = this.usersService.getUsers();
  }

  createUser(user: Partial<User>) {
    this.usersService.createUser(user).subscribe(() => {
      this.getUsers();
    });
  }

  deleteUser(userId: number) {
    this.usersService.deleteUser(userId).subscribe(() => {
      this.getUsers();
    });
  }
}
