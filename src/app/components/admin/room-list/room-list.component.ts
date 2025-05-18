import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Room } from '../../../models/room';
import { RoomService } from '../../../services/room.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  imports: [RouterModule, CommonModule, HttpClientModule]
})
export class RoomListComponent implements OnInit {
  rooms: Room[] = [];
selectedRoom: any;

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.getAllRooms();
  }

  getAllRooms(): void {
    this.roomService.getAllRooms().subscribe({
      next: (res) => this.rooms = res,
      error: (err) => console.error('Lỗi khi lấy danh sách phòng:', err)
    });
  }
  onSelectRoom(room: Room): void {
    this.selectedRoom = room; // Cập nhật phòng đã chọn
  }
}
