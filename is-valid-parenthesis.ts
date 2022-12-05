type IsValidParenthesis = (s: string) => boolean;

const isValidParenthesis: IsValidParenthesis = (s) => {
  const closingString = { ")": "(", "}": "{", "]": "[" };
  const openingString = { "(": ")", "{": "}", "[": "]" };
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (openingString[s[i]]) {
      stack.push(s[i]);
    } else {
      if (stack[stack.length - 1] !== closingString[s[i]]) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
};
