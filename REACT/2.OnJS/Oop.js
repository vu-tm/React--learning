/*================================================*\ 
Object là gì?
    Object trong Javascript được dùng để nhóm các giá trị lại với nhau.
    Tổ chức dữ liệu dạng "key-value"
\*================================================*/

//object
const person = {
    //thuộc tính
    name: 'John',
    "tuổi tác": 30,
    // phương thức
    xinChao() {
        console.log('Hello, my name is ' + this.name);
    }
};

//truy cập thuộc tính
console.log(person.name); // John // Truy cập bằng dot notation
console.log(person["tuổi tác"]); // 30 // Truy cập bằng bracket notation

// Class
class Person {
    // Phương thức khởi tạo
    constructor(name, age) {
        this.ten = name;
        this.age = age;
    }
    // Phương thức
    xinChao() {
        console.log('Hello, my name is ' + this.ten);
    }
}
// Tạo đối tượng từ class
const person1 = new Person('Alice', 25);
console.log(person1.ten); // Alice