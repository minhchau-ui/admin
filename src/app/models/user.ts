// export interface User {
//   _id: string;
//   TenKH: string;
//   DiaChi: string;
//   Email: string;
//   SoDT: string;
//   YeuCau_DB: string;
//   Password?: string; // optional nếu không cần hiển thị
//   TrangThai?: string;
//   NgayTao?: Date;
// }

export interface User {
  _id: string;
  TenKH: string;
  DiaChi: string;
  Email: string;
  SoDT: string;
  YeuCau_DB?: string; // nếu có thêm trường này
}
