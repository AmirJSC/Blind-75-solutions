type TwoSum = (nums: number[], target: number) => number[]

// Brute Force approach
const twoSum1: TwoSum = (nums, target) => {
  for(let i=0; i < nums.length; i++) {
    for(let j=i+1; j < nums.length; j++) {
      if(nums[j] + nums[i] === target) {
        return [i,j]
      }
    }
  }
}

// Using hash-maps
const twoSum2: TwoSum = (nums, target) => {
  let mapOfNumbers = {};
  
  for(let i = 0; i < nums.length; i++) {
    mapOfNumbers[nums[i]] = i;
  }

  for(let j = 0; j < nums.length; j++) {
    let goal = target - nums[j];
    if(mapOfNumbers[goal] !== undefined && mapOfNumbers[goal] !== j) {
      return [j, mapOfNumbers[goal]];
    }
  }
}

const twoSum3: TwoSum = (nums, target) => {
  let mapOfNumbers = {};
  for(let i = 0; i < nums.length; i++) {
    let goal = target - nums[i];
    if(mapOfNumbers[goal] !== undefined) {
      return [i, mapOfNumbers[goal]];
    }
    mapOfNumbers[nums[i]] = i;
  }
}
