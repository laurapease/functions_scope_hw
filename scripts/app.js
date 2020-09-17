// ## 1. Verbal questions

//1. What is the difference between a ** parameter ** and an ** argument **?
// *A parameter is a named variable that is passed into a function. An argument is the real value given to the parameter that is used in the function when it is called. The argument supplies the values that the parameters initialize in the function.

//2. Within a function, what is the difference between **return** and ** console.log **?

// **Console.log** is a function that will give you the results displayed in the 'Console' in your Dev Tools. It is most heavily used in the debugging process by developers. It logs out the information requested (the value) in the console without affecting the code.
//**Return** will cause reactions in your javascript, and returns a value to the caller of the function.

// 3. What are the implications of the ability of a function to return a value?

// ## 2. Palindrome again.
// Write a function `checkPalindrome` that accepts a single argument, a string.Yes, you've done it before, but do it again. Later in this assignment we're gonna beef up our palindrome function some.See if you can do it without looking back at your previous answer.The function should return true if the string is a palindrome, false if not.Make sure your function will give the correct answer for words with ** capital letters **.

//```javascript
//console.log(checkPalindrome("Radar"));
// => true
//```

//  ```javascript
//console.log(checkPalindrome("Borscht"));
//=> false
//```
const wordToCheck = "borscht";

const checkPalindrome = (str) => {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
console.log(checkPalindrome(wordToCheck));

// ## 3. Digit Sum
// Write a function `sumDigits` that accepts a number and returns the sum of its digits.
// ```js
// console.log(sumDigits(42));
// => 6;
// ```

function sumDigits(num) {
  var sum = 0;

  if (Number.isInteger(num) === false) {
    return sum;
  }

  var str = num.toString();
  for (i = 0; i <= str.length - 1; i++) {
    sum += +str[i];
  }

  return sum;
}

console.log(sumDigits(414));
