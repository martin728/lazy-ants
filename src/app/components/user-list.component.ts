import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../models/Users';
import { UserService } from '../services/users.service';
import { Subject, takeUntil } from 'rxjs';



@Component({
  selector: 'users-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
})
export class UserComponent implements OnInit {
  users: User[] = [];
  isLoading = true;
  error: string | null = null;
  private destroy$ = new Subject<void>();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => { this.users = data; this.isLoading = false; },
        error: () => { this.error = 'Failed to load users'; this.isLoading = false; }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
