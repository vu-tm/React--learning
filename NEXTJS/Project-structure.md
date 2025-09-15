# Cấu trúc thư mục

<h4> 
  Bản thân nextjs sẽ cung cấp route tự suy diễn theo cấu trúc thư mục:
  <img width="60%" src="https://github.com/user-attachments/assets/03109660-df4b-4981-bb0d-d144cb805fdb" />
</h4>
<h4> 
  Giả sử đây là cấu trúc của website
  <img width="80%" src="https://github.com/user-attachments/assets/f3a9670e-a11f-4ef1-b827-05ff27321bf8" />
</h4>
<h4> 
  Cấu trúc đường dẫn (URL) của một trang web:
  <img width="70%" src="https://github.com/user-attachments/assets/6e5e9ef5-dd39-4de0-b94c-99eae0e65bd4" />
</h4>
<h4> 
  Vậy thì nextjs sẽ suy diễn dựa trên cấu trúc của URL của 1 trang web và cấu trúc thư mục tương ứng.
  <img width="70%" src="https://github.com/user-attachments/assets/8310142c-0277-4014-bcf9-aca54f5b03d3" />
  <br>
  ⌯⌲ [slug] chính xác là thư mục
</h4>

<br>


Kết hợp với quy tắc đặt tên của nextjs:

# Quy ước Tập tin

Next.js cung cấp một tập hợp các tập tin đặc biệt để tạo giao diện người dùng với các hành vi cụ thể trong các route lồng nhau:

| Tập tin         | Mục đích                                                                 |
|-----------------|-------------------------------------------------------------------------|
| `layout`        | Giao diện chia sẻ cho một segment và các segment con của nó             |
| `page`          | Giao diện duy nhất của một route và làm cho route có thể truy cập công khai |
| `loading`       | Giao diện tải cho một segment và các segment con của nó                 |
| `not-found`     | Giao diện không tìm thấy cho một segment và các segment con của nó      |
| `error`         | Giao diện lỗi cho một segment và các segment con của nó                 |
| `global-error`  | Giao diện lỗi toàn cục                                                  |
| `route`         | Điểm cuối API phía máy chủ                                              |
| `template`      | Giao diện Layout được render lại chuyên biệt                           |
| `default`       | Giao diện dự phòng cho các Route Song song                              |
