import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { User } from '../../../models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  imports: [RouterModule, CommonModule, HttpClientModule]
})

export class UserComponent implements OnInit {
  users: User[] = [];
  editingUser: User | null = null;

  private subscription?: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser() {
    this.subscription = this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.error('Lấy dữ liệu user lỗi:', err);
      }
    });
  }

  editUser(user: User) {
    this.editingUser = { ...user };
  }

  saveUser() {
    if (!this.editingUser) return;
    const index = this.users.findIndex(u => u.Email === this.editingUser?.Email);
    if (index > -1) {
      this.users[index] = this.editingUser;
    }
    this.editingUser = null;
  }

  cancelEdit() {
    this.editingUser = null;
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}





// export class UserComponent implements OnInit {
//   users: any[] = [];

//   constructor(private userService: UserService) {}

//   ngOnInit(): void {
//     this.userService.getAllUsers().subscribe((data) => {
//       this.users = data;
//     });
//   }
//   editUser(user: any) {
//     console.log('Edit:', user);
//   }


//   deleteUser(user: any) {
//     console.log('Delete:', user);
//   }

// }
