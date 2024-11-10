import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  selectedUsers = DUMMY_USERS[randomIndex];

  get imagePath() {
    return 'assets/users/' + this.selectedUsers.avatar;
  }

  onClickEvent() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUsers = DUMMY_USERS[randomIndex];
  }
}
