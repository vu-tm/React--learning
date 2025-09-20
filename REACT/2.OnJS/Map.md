# map()
Được dùng để tạo ra **mảng mới** từ mảng ban đầu.
#### Khai báo:
```js
let newArray = array.map(
    function(currentValue, index, arr) {
        // return giá trị mới của phần tử
    }, thisArg
);
```  
- Trong đó:  
    - `currentValue`: Giá trị của phần tử hiện tại  
    - `index`(tuỳ chọn): Vị trí của phần tử hiện tại  
    - `arr`(tuỳ chọn): Mảng gốc  
    - `thisArg`(tuỳ chọn): Giá trị dùng làm this khi gọi callback  

---

#### Ví dụ 1: Nhân đôi giá trị của các phần tử trong mảng
```js
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function (number) {
    return number * 2;
});

console.log(doubled); // Kết quả: [2, 4, 6, 8, 10]
```

#### Ví dụ 2: Chuyển đổi mảng các đối tượng thành mảng các tên
```js
const users = [
    {id: 1, name: "An", age: 25},
    {id: 2, name: "Bình", age: 30},
    {id: 3, name: "Châu", age: 28}
];

const names = users.map((user) => user.name);
console.log(names); // Kết quả: ['An', 'Bình', 'Châu']
```

#### Ví dụ 3: Sử dụng đầy đủ tham số currentValue, index và arr
```js
const M = [10, 20, 30, 40];

const result = M.map(function (currentValue, index, arr) {
    console.log(`Index: ${index}`); // In ra vị trí của phần tử
    console.log(`Value: ${currentValue}`); // In ra giá trị của phần tử hiện tại
    console.log(`Array: ${arr}`); // In ra mảng gốc
    // Ở đây ta chuyển đổi mỗi giá trị bằng cách chia cho 10
    return currentValue / 10;
});

console.log(result); // Kết quả: [1, 2, 3, 4]
```
**Output:**  
```js
Index: 0
Value: 10
Array: 10,20,30,40
Index: 1
Value: 20
Array: 10,20,30,40
Index: 2
Value: 30
Array: 10,20,30,40
Index: 3
Value: 40
Array: 10,20,30,40
[ 1, 2, 3, 4 ]
```

#### Ví dụ 4: Sử dụng đối số `thisArg`
```js
const config = { // Thuộc tính
    calculate(value) { // Phương thức của thuộc tính
        return value * 3;
    },
};

const M2 = [1, 2, 3];
const kq = M2.map(function (v1) {
    return this.calculate(v1);
}, config); // Truyền config làm thisArg
// Dùng khi cần truy cập phương thức của 1 thuộc tính nào đó
console.log(kq); // Kết quả: [3, 6, 9]
```

#### ⚠️ Ví dụ này sẽ KHÔNG hoạt động nếu sử dụng arrow function vì Arrow function không có this riêng
