import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User, UsersService } from '../services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  users?: User[];
  constructor(private usersService: UsersService) {}

  userForm = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
  });

  saveUser() {
    this.usersService.save(this.userForm.value).subscribe(data => {
      console.log(data)
    });
  }
}
