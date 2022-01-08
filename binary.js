let arr = Array.from({ length: 37000 }, () =>
  Math.floor(Math.random() * 37000)
);

var searchInsert = function (nums, target) {
  let min = 0,
    max = nums.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (target === nums[mid]) return mid;
    if (target > nums[mid]) min = mid + 1;
    if (target < nums[mid]) max = mid - 1;
  }

  return min;
};

console.log(
  searchInsert(
    arr.sort((a, b) => a - b),
    36000
  )
);
