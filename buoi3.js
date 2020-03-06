// 13: callback
// function getName(name, dosth) {
//   return dosth(name);
// }

// function sayHi(value) {
//   return "Say hi " + value;
// }

// console.log(getName("Khoa", sayHi));

// 1 - 100
// In so chan
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) console.log(i);
// }

// In so le
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) console.log(i);
// }

// In so chia 3 du 1
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 1) console.log(i);
// }

// In so chinh phuong (can 2 ra so nguyen)
// for (let i = 1; i <= 100; i++) {
//   if (Math.sqrt(i) % 1 === 0) console.log(i);
// }

// function handleNumber(sodu, sochia, callback) {
//   for (let i = 1; i <= 100; i++) {
//     if (!callback) {
//       if (i % sochia === sodu) console.log(i);
//     } else {
//       if (callback(i) % sochia === sodu) console.log(i);
//     }
//   }
// }
// handleNumber(0, 1, Math.sqrt);

function handleNumber(sodu, sochia, dosth) {
  for (let i = 1; i <= 100; i++) {
    const dk = dosth(i);
    if (dk) console.log(i);
  }
}

handleNumber(function(number) {
  if (number % 2 === 0) return true;
  return false;
});
