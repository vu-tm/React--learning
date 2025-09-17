# DESTRUCTURING
Destructuring là một tính năng cho phép **trích xuất dữ liệu** từ **arrays** hoặc **objects**  
● Với **Arrays:** Trích xuất dựa trên **index**  
● Với **Object:** Trích xuất dựa trên **tên thuộc tính**  
<br><br>

## Destructuring Arrays
```js
// Giả sử chúng ta có một mảng như sau:
const userName = ["Toàn", "Hà", "Huy"];

// Nếu muốn lấy ra các phần tử trong mảng trên, chúng ta sẽ làm như sau:
const user1 = userName[0];
const user2 = userName[1];
const user3 = userName[2];
console.log(user1, user2, user3); // Toàn Hà Huy
```
<br>  

#### ✔ Sử dụng Destructuring Arrays để gọn  

```js
const [user4, user5, user6] = userName;
// user4 - 0 , user5 - 1, user6 - 2
console.log(user4, user5, user6); // Toàn Hà Huy
```
<br>

#### ✔ Có thể bỏ qua phần tử bằng dấu ,  

```js
const [, , user6] = userName;
console.log(user6); // Huy
```
<br>

#### Destructuring với giá trị mặc định

```js
const [user4, user5, user6, user7="Tú"] = userName;
console.log(user4, user5, user6, user7); // Toàn Hà Huy Tú
```

#### Destructuring với rest parameter
```js
const [user4, ...rest] = userName;
console.log(user4); // Toàn
console.log(rest); // Hà Huy
```
<br><br>

## Destructuring Objects

```js
// Tạo object
const user = {
    name: "Vũ",
    age: 20,
};
// Lấy thuộc tính
const ten = user.name;
const tuoi = user.age;
console.log(ten); //Toàn
console.log(tuoi); //20
```
<br>  

#### ✔ Sử dụng Destructuring Objects để gọn   
⚠ Tên biến phải trùng tên thuộc tính trong object  

```js
const {name, age} = user;
console.log(name); //Toàn
console.log(age); //20
```
<br>

#### Đổi tên biến khi destructuring obj
```js
const {name: ten1, age: tuoi1} = user;
console.log(ten1); //Toàn
console.log(tuoi1); //20
```
<br><br>

## Destructuring in Function
#### ✔ Sử dụng Destructuring trực tiếp trong tham số của hàm
```js
// Giả sử có 1 object đơn hàng
const donHang = {
    maDonHang: 101,
    tienTe: "VND",
    tongTien: 500000,
};
```
<br>

#### Không sử dụng Destructuring
```js
function xuLyDonHang(donHang) {
    const { maDonHang, tienTe, tongTien } = donHang;

    console.log(`Mã đơn hàng: ${maDonHang}`);
    console.log(`Tiền tệ: ${tienTe}`);
    console.log(`Tổng tiền: ${tongTien}`);
}

// Gọi hàm:
xuLyDonHang(donHang);
```
<br>

#### Sử dụng Destructuring
```js
console.warn("Sử dụng Destructuring:");
function xuLyDonHang2({maDonHang, tienTe, tongTien}) {
    console.log(`Mã đơn hàng: ${maDonHang}`);
    console.log(`Tiền tệ: ${tienTe}`);
    console.log(`Tổng tiền: ${tongTien}`);
}

// Gọi hàm:
xuLyDonHang2(donHang);
```
<br><br>
