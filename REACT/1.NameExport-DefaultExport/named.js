// ===================================================================//

// cách 1: Khai báo hàm, biến, class rồi export
const myVar = 5;

function myFunction() {
    console.log("Hello from myFunction");
}

export { myVar, myFunction };

// cách 2: Export trực tiếp khi khai báo
export const anotherVar = 10;

// ===================================================================//

let df2 = "default export 2";
export default df2;