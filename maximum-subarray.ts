type MaximumSubarray = (nums: number[]) => number;

const maxSubarray1: MaximumSubarray = (nums) => {
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
};

//
const maxSubarray2: MaximumSubarray = (nums) => {
  let currSum = 0;
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    currSum = Math.max(currSum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
};
