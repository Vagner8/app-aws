import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  @Output() createUserEvent = new EventEmitter();
  fb = new FormBuilder();
  userForm = this.fb.group({
    name: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
  });

  onSubmitHandler() {
    this.createUserEvent.emit(this.userForm.value);
  }
}
