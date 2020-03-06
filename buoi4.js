// 15: ham reduce
// const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const value = arrayNumbers.reduce(function(prev, current, index) {
//   console.log("prev: ", prev);
//   return prev + current;
// }, 1);

// Bai 17
// function totalVotes(arr) {
//   let count = arr.reduce(function(prev, current) {
//     if (current.voted) return prev + 1;
//     return prev;
//   }, 0);
//   return count;
// }

// var voters = [
//   { name: "Bob", age: 30, voted: true },
//   { name: "Jake", age: 32, voted: true },
//   { name: "Kate", age: 25, voted: false },
//   { name: "Sam", age: 20, voted: false },
//   { name: "Phil", age: 21, voted: true },
//   { name: "Ed", age: 55, voted: true },
//   { name: "Tami", age: 54, voted: true },
//   { name: "Mary", age: 31, voted: false },
//   { name: "Becky", age: 43, voted: false },
//   { name: "Joey", age: 41, voted: true },
//   { name: "Jeff", age: 30, voted: true },
//   { name: "Zack", age: 19, voted: false }
// ];
// console.log(totalVotes(voters)); // 7

// function shoppingSpree(arr) {
//   return arr.reduce(function(prev, current) {
//     if (current.price) return prev + current.price;
//     return prev;
//   }, 0);
// }

// var wishlist = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "Fancy hacky Sack", price: 5 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 }
// ];
// console.log(shoppingSpree(wishlist)); // 227005

// function countOccurrences(arr) {
//   return arr.reduce(function(prev, current) {
//     if (current in prev) {
//       prev[current] = prev[current] + 1;
//     } else {
//       prev[current] = 1;
//     }
//     return prev;
//   }, {});
// }
// console.log(countOccurrences(["a", "b", "c", "b", "a", "a"]));

// const arraySinhVien = [
//   { name: "Teo", age: 10 },
//   { name: "TI", age: 20 },
//   { name: "Tuan", age: 15 }
// ];

// Ket hop phuong thuc map va reduce de tinh tong tuoi
// const total = arraySinhVien
//   .map(function(sinhvien) {
//     return sinhvien.age;
//   })
//   .reduce(function(prev, current) {
//     return prev + current;
//   });

// console.log(total);

// 16: Ham sort
// return a - b: Tăng dần
// return b - a: nhỏ dần

// 17: khoi tao object
function Sinhvien(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}

const teo = new Sinhvien("Nguyen Van Teo", 20, "38 Nguyen Lam");
Sinhvien.prototype.schoolName = "hehe";
const ti = new Sinhvien("Ngyen Van Ti", 21, "asdasd");
console.log(teo.schoolName);
console.log(ti.schoolName);
// prototype ko tao o vung moi. Tất cả object dùng chung một prototype.

// 18: toan tu ba ngoi
// bieuthuc ? true : false
function doSomething(a) {
  var b;
  if (a > 0) {
    b = 1;
  } else if (a < 0) {
    b = 2;
  } else {
    b = 3;
  }
  return b;
}

function doSomethingTernary(a) {
  return a > 0 ? 1 : a < 0 ? 2 : 3;
}

console.log(doSomethingTernary(0));
console.log(doSomething(0));

// JS Nang cao
// 1: var let const

// bien toan cuc
let name = "Teo";

function showName() {
  // bien cuc bo
  let name = "Ti";
  return name;
}
console.log(name);

// xu ly khai bao bien trong scope truoc, neu khong co moi kiem toan cuc.
