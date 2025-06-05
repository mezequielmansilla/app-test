import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.scss',
  standalone: false
})
export class UserItemComponent {
  @Input()
  user: User | undefined
}
