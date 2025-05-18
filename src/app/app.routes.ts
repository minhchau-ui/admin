import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RoomListComponent } from './components/admin/room-list/room-list.component';
import { RoomTypeListComponent } from './components/admin/roomtype-list/roomtype-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';
import { UserComponent } from './components/admin/user/user.component';

export const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'sidebar', component: SidebarComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminLayoutComponent,
    children:[
      {path:'room-list', component: RoomListComponent},
      {path:'roomtype-list', component: RoomTypeListComponent},
      {path:'user', component: UserComponent},
    ]
  },
  {path: '**', redirectTo : '/home'},
];
