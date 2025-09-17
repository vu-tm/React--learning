# Toán tử Spread  
- **Tác dụng**:  
  - "Trải" các phần tử của một mảng ra thành các phần tử riêng lẻ  
  - "Trải" các cặp key-value trong một đối tượng để kết hợp hoặc sao chép  

- **Thường được sử dụng để**:  
  - Gộp (merge) dữ liệu  
  - Sao chép mảng hoặc đối tượng  
  - Thêm dữ liệu mới một cách linh hoạt  
<br><br>

## Toán tử Spread với mảng
```js
// Danh sách sở thích hiện tại
let soThich = ["đọc sách", "nghe nhạc"];

// Sở thích mới muốn thêm
const soThichMoi = "đi du lịch";

// Cập nhật danh sách sở thích bằng Spread Operator
soThich = [...soThich, soThichMoi];
console.log("Sau khi thêm: ", soThich);
// Sau khi thêm: ['đọc sách', 'nghe nhạc', 'đi du lịch']

soThich = [...soThich, "smth" ,...soThichMoi];
console.log("Sau khi thêm: ", soThich);
// Sau khi thêm: ['đọc sách', 'nghe nhạc', 'smth' 'đi du lịch']
```
<br>

## Toán tử Spread với object
```js
// Thông tin người dùng ban đầu
let user = {
    id: 1,
    name: "Nguyễn Văn A"
};

// Thông tin cần cập nhật
const updates = {
    address: "123 Đường ABC",
    role: "admin"
};

// Ví dụ 1: Thêm dữ liệu mới
user = {...user, ...updates};
console.log(user);
// { id: 1, name: 'Nguyễn Văn A', address: '123 Đường ABC', role: 'admin' }

// Ví dụ 2: Ghi đè thứ tự khác
user = {...updates, ...user};
console.log(user);
// { address: '123 Đường ABC', role: 'admin', id: 1, name: 'Nguyễn Văn A' }
```
<br><br>


