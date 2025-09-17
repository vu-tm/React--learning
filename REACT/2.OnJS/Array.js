const traicay = ['cam', 'xoai', 'mit', 'tao', 'nho'];
console.log(traicay);

// Một số phương thức thường dùng với mảng
// push(): thêm phần tử vào cuối mảng
traicay.push('dua hau');
console.log(traicay);

// map(): tạo mảng mới bằng cách gọi hàm cho từng phần tử của mảng gốc
const traicayHoaQua = traicay.map(function (item) {
    return item.toUpperCase();
});
console.log(traicayHoaQua); // ['CAM', 'XOAI', 'MIT', 'TAO', 'NHO', 'DUA HAU']

// filter(): tạo mảng mới gồm các phần tử thỏa mãn điều kiện
const traicayCoChuaO = traicay.filter(function (item) {
    return item.includes('o');
});
console.log(traicayCoChuaO); // ['xoai', 'mit', 'nho']

// Biến đổi phần tử mảng thành đối tượng mới
const traicayObjects = traicay.map((item) => ({ traicay: item }));
console.log(traicayObjects); // [{traicay: 'cam'}, {traicay: 'xoai'}, ...]

// findIndex(): tìm chỉ số của phần tử đầu tiên thỏa mãn điều kiện
const index = traicay.findIndex((item) => item === 'mit');
console.log(index); // 2