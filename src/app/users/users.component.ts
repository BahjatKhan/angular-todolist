import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  clickOnUserCard = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onClickEvent() {
    this.clickOnUserCard.emit(this.user.id);
  }
}
