import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onClickEvent() {}
}
