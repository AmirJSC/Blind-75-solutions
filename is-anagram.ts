type IsAnagram = (s: string, t: string) => boolean;

const isAnagram1: IsAnagram = (s, t) => {
  let firstString = s.split("").sort();
  let secondString = t.split("").sort();

  if (firstString.length !== secondString.length) {
    return false;
  }

  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] !== secondString[i]) {
      return false;
    }
  }
  return true;
};

const isAnagram2: IsAnagram = (s, t) => {
  let firstString = {};
  let secondString = {};

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    firstString[s[i]] === undefined
      ? (firstString[s[i]] = 1)
      : firstString[s[i]]++;
    secondString[t[i]] === undefined
      ? (secondString[t[i]] = 1)
      : secondString[t[i]]++;
  }

  for (let x of Object.keys(firstString)) {
    if (firstString[x] !== secondString[x]) {
      return false;
    }
  }
  return true;
};

const IsAnagram3: IsAnagram = (s, t) => {
  let hashTable = {};

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (!hashTable[s[i]]) {
      hashTable[s[i]] = 1;
    } else {
      hashTable[s[i]]++;
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (!hashTable[t[j]]) {
      return false;
    }
    hashTable[t[j]]--;
  }
  return true;
};
