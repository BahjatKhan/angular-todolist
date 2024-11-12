import { Component, EventEmitter, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  @Input({ required: true }) user!: {
    id: string;
    name: string;
    avatar: string;
  };

  clickOnUserCard = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onClickEvent() {
    this.clickOnUserCard.emit(this.user.id);
  }
}
