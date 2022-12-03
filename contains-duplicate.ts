type ContainsDuplicate = (nums: number[]) => boolean;

// Brute force approach
const containsDuplicate1: ContainsDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let refNumber = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (refNumber === nums[j]) {
        return true;
      }
    }
  }

  return false;
};

const containsDuplicate2: ContainsDuplicate = (nums) => {
  let newSet = new Set(nums);
  return nums.length !== newSet.size;
};

const containsDuplicate3: ContainsDuplicate = (nums) => {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = i;
    } else {
      return true;
    }
  }

  return false;
};
