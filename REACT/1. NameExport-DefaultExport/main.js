// ===================================================================//

import { myFunction, myVar as TenMoi } from "./named.js";
console.log(TenMoi); // myVar
myFunction();
// => Chỉ cần sửa ở file named.js là đủ tác động hết tất cả.

// Lấy tất cả export
import * as TenModule from "./named.js";
// * lấy tất cả nhưng chỉ biến, hàm, class đã export chứ không nhận giá trị export default
console.log(TenModule.anotherVar);
TenModule.myFunction();

// import default export
import abc from "./default.js";
console.log(abc);

// Sử dụng default export kết hợp named export
import def, { myVar as var1, myFunction as func1 } from "./named.js";
// default export không để trong {}
console.log(def);
console.log(var1);
func1();
// ===================================================================//


