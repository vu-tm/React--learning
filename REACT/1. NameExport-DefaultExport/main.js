import { myFunction, myVar } from "./named.js";
console.log(myVar);
myFunction();
// => Chỉ cần sửa ở file named.js là đủ tác động hết tất cả.

// Lấy tất cả export
import * as TenModule from "./named.js";
console.log(TenModule.anotherVar);
TenModule.myFunction();
