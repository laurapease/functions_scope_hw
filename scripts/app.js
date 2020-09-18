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

console.log(sumDigits(212));

// ## 4. Pythagoras
//Write a function `calculateSide` that takes two arguments: `sideA` and`sideB`, and returns the solution for sideC using the Pythagorean theorem.

//_hint: _ discover the Pythagorean Theorem on a website called google.com

// _hint: _ checkout the[Math methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) in javascript

// ** _restriction_ **: for this problem, do NOT use`Math.hypot()`(but for the rest of time, once you've done this problem feel free)
//   ```js
//console.log(calculateSide(8, 6));
//=> 10
//```

function calculateSide(sideA, sideB) {
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}
console.log(calculateSide(44, 9));
console.log(calculateSide(8, 6));

// ## 5. Sum Array

// Write a function `sumArray` that takes an ** array ** as an argument.
// The array should contain numbers.The function should return the sum of the numbers in the array. ** Do not use`.reduce()` **.

// Expected result:

// ```javascript
// console.log(sumArray([1, 2, 3, 4, 5, 6]));
// => 21
// ```

function sumArray(x) {
  if (toString.call(x) !== "[object Array]") return false;

  var total = 0;
  for (var i = 0; i < x.length; i++) {
    if (isNaN(x[i])) {
      continue;
    }
    total += Number(x[i]);
  }
  return total;
}
console.log(sumArray([1, 2, 3, 4, 5, 6, 7]));

// ## 6. Prime Numbers

// A Prime number is a number that is not evenly divisible by another number except 1 and itself.If you want to read more deeply about it, [go here](https://en.wikipedia.org/wiki/Prime_number).
//   To test whether a number is Prime, you only need to test as far as the ** square root ** of that number.This is advisable for optimization and testing large numbers.

// ### Step One

// Write a function called `checkPrime` that will test whether a number is Prime.The function will return true(Boolean) if Prime, false if not.
//   _Hint: _ Check every number up to the square root.To do this, try a _for loop_.

function checkPrime(n) {
  if (n == 1) {
    return true;
  } else if (n == 2) {
    return false;
  } else
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      } else {
        return true;
      }
    }
}
console.log(checkPrime(14));

// ### Step Two

// Write another function called `printPrimes` that will print(console log) all the Primes up to an arbitrary limit.For example, if you invoke your function with `printPrimes(97)`, it will print all the Prime numbers up to and including 97.
// This function can ** call on ** the previous`checkPrime` function
// ///

function printPrimes(x) {
  var sieve = [],
    i,
    j,
    primes = [];
  for (let i = 2; i <= x; ++i) {
    if (!sieve[i]) {
      primes.push(i);
      for (let j = i << 1; j <= x; j += i) {
        sieve[j] = true;
      }
    }
  }
  return primes;
}

console.log(printPrimes(97));
