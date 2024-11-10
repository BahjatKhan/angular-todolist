import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  selectedUsers = DUMMY_USERS[0];

  get imagePath() {
    return "'assets/users/' + selectedUsers.avatar'";
  }

  onClickEvent() {}
}
