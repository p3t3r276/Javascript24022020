function double(num) {
  return num * 2;
}

function sumAndDo(nums, callback) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  sum = callback(sum);
  return sum;
}

console.log(sumAndDo([1, 2, 3], double));
