# PROPS
- Là các tham số được truyền từ component cha xuống component con để hiển thị dữ liệu hoặc cấu hình component con.  
- Props là dữ liệu bất biến, nghĩa là chúng không thể được thay đổi bởi component nhận props.  

| Đặc điểm          | **State** | **Props** |
|-------------------|-----------|-----------|
| **Định nghĩa**    | Dữ liệu nội bộ của component, có thể thay đổi trong vòng đời component | Giá trị được truyền từ component cha xuống component con, không thể thay đổi bởi component con |
| **Quản lý**       | Bởi chính component nơi state được khai báo | Bởi component cha và được truyền xuống |
| **Cập nhật giá trị** | Có thể thay đổi bằng hàm setState hoặc useState | Không thể thay đổi (immutable) trong component con |
| **Khởi tạo**      | Được khởi tạo bên trong component với giá trị ban đầu | Được truyền từ component cha dưới dạng thuộc tính khi render |
| **Mục đích sử dụng** | Quản lý dữ liệu nội bộ có thể thay đổi (form input, trạng thái) | Truyền dữ liệu từ component cha xuống để hiển thị hoặc xử lý |
| **Phạm vi sử dụng** | Chỉ trong component được khai báo | Có thể truyền xuống nhiều component con khác nhau |
| **Tính tái sử dụng** | Ít tái sử dụng hơn vì mỗi component có state riêng | Dễ tái sử dụng vì chỉ nhận dữ liệu từ component cha |
| **Ảnh hưởng đến UI** | Khi state thay đổi, UI của component sẽ render lại | Khi props thay đổi, component con sẽ render lại theo dữ liệu mới |
| **Cách truy cập** | Trong function component qua useState, class component qua this.state | Qua props của function component hoặc this.props trong class component |
| **Tương tác component** | Không thể truyền trực tiếp (phải qua props hoặc context) | Có thể truyền từ component cha xuống nhiều component con |