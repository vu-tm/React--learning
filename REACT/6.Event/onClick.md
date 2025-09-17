# 🎯 Xử lý sự kiện `onClick` trong JavaScript & React

## 📌 Trong JavaScript thuần

Ví dụ: Thêm sự kiện `click` vào một nút bằng `addEventListener`:

```js
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  // làm việc gì đó
  alert("Nút được click!");
});
```

## 📌 Trong React

#### React hỗ trợ các event handler props đặc biệt như onClick, onChange, onSubmit, ... để gắn sự kiện trực tiếp vào JSX.

Ví dụ: Tạo một component TabButton có sự kiện onClick:

```js
export default function TabButton({ children }) {
  // Hàm xử lý khi người dùng click vào button
  function handleClick() {
    alert("Nút bấm được click");
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
```

#### ⚠ Truyền tên hàm `handleClick` chứ không truyền thực thi ~~handleClick()~~