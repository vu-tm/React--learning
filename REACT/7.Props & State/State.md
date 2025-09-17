# State
- Để có thể lưu giá trị có thể từ người dùng nhập, hoặc giá trị khởi 
tạo mặc định... thì bạn sẽ phải cần đến state.  
- State là một đối tượng lưu trữ dữ liệu nội bộ của một component và có thể thay đổi
theo thời gian. 
→ Khi state của 1 component thay đổi, React sẽ tự động cập nhập lại giao diện để
phản ánh những thay đổi đó.  
<br><br>

💡 Để component truy xuất vào state tối ưu nhất, bạn cần **định nghĩa state** trong 
component cha **gần** với các component đó nhất.  

#### - Để sử dụng ta sử dụng **useState**
- Tất cả thành phần bắt đầu bằng use... được gọi là **react Hook**  
- Hook bản chất là các hàm tính năng được React thiết kế sẵn  
→ 
```js
import {useState} from "react";
```



