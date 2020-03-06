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

function shoppingSpree(arr) {
  return arr.reduce(function(prev, current) {
    if (current.price) return prev + current.price;
    return prev;
  }, 0);
}

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];
console.log(shoppingSpree(wishlist)); // 227005

function countOccurrences(arr) {
  return arr.reduce(function(prev, current) {
    if (current in prev) {
      prev[current] = prev[current] + 1;
    } else {
      prev[current] = 1;
    }
    return prev;
  }, {});
}
console.log(countOccurrences(["a", "b", "c", "b", "a", "a"]));
