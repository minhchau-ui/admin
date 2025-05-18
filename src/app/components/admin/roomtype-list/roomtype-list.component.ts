import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoomType } from '../../../models/roomtype';
import { RoomTypeService } from '../../../services/roomtype.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roomtype-list',
  standalone: true,
  templateUrl: './roomtype-list.component.html',
  styleUrls: ['./roomtype-list.component.scss'],
  imports: [RouterModule, CommonModule, HttpClientModule]
})
export class RoomTypeListComponent implements OnInit {
  roomTypes: RoomType[] = [];
  selectedRoomType: RoomType | null = null;
  loading = false;
  errorMessage: string | null = null;

  constructor(private roomTypeService: RoomTypeService) {}

  ngOnInit(): void {
    this.loadRoomTypes();
  }

  loadRoomTypes(): void {
    this.loading = true;
    this.errorMessage = null;
    this.roomTypeService.getAllRoomTypes().subscribe({
      next: (data: RoomType[]) => {
        this.roomTypes = data;
        if (data.length > 0) {
          this.selectedRoomType = data[0];
        }
        this.loading = false;
      },
      error: (err: any) => {
        this.errorMessage = 'Lỗi khi load loại phòng: ' + (err.message || err.statusText || 'Unknown error');
        console.error(this.errorMessage, err);
        this.loading = false;
      }
    });
  }

  onSelectRoomType(roomType: RoomType): void {
    this.selectedRoomType = roomType;
  }
}
