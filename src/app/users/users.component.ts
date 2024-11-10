import { Component, signal, computed } from '@angular/core';
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
  selectedUsers = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'assets/users/' + this.selectedUsers().avatar);
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUsers.avatar;
  // }

  onClickEvent() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUsers.set(DUMMY_USERS[randomIndex]);
  }
}
