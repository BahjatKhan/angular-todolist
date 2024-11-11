import { Component, EventEmitter, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  clickOnUserCard = output<string>();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onClickEvent() {
    this.clickOnUserCard.emit('Hellow ' + this.name);
  }
}
