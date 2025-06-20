import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../models/Users';
import { UserService } from '../services/users.service';
import { Observable, Subject, takeUntil } from 'rxjs';



@Component({
  selector: 'users-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
})
export class UserComponent {
    users$: Observable<User[]>;

    constructor(private userService: UserService) {
        this.users$ = this.userService.getUsers();
    }

}
