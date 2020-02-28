// 1: Khai bao bien

// 2: Kieu du lieu
// Các trường hợp gặp undefined
// var và let khong khai báo thì undefined nhưng const thì khong đươợ
// var a
// console.log(a)

// 3: object
// Th1: Gọi thuộc tính tồn tại
// Th2: Gọi thuộc tín không tồn tại
// Trả về undefined
// Nhưng nếu truy cập vào thộc tính không tồn tại thì báo lỗi
// var teo = { name: "Nguyen Van Teo", age: 10 }
// console.log(teo)

// 4: Kieu Array
// Khi dùng const thì có thể thay đổi các giá trị phần tử nhưng không được thay đổi count phần tử

// 5: Toán tử
// + - * / % ++ --
// var a = 5
// var b = a++
// console.log(b)

// var c = ++a - --b + ++b + a-- - b++
// dap an: 7
// console.log(c)

// 7: Function
// function showName(a, b, c) {
//     return
// }
// console.log(showName())

// 8: Object method
var teo = {
  name: "Nguyen Van Teo",
  age: 10,
  getName: function() {
    return this.name;
  }
};
console.log(teo.getName());

// Template Strings (Template literals)
