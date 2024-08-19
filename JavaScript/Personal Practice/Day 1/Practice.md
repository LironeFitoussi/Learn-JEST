Here's the formatted and completed list of functions for QA test practice:

---

# 50 Functions for QA Test Practice

For each function below, write a test using the following guidelines:

* Use the `it` function to define a test case.
* Structure your test using the AAA pattern (Arrange, Act, Assert).
* Use the `expect` function to make assertions about the function's behavior.

### 1. Addition Function
```javascript
function add(a, b) {
  return a + b;
}
```

### 2. Subtraction Function
```javascript
function subtract(a, b) {
  return a - b;
}
```

### 3. Multiplication Function
```javascript
function multiply(a, b) {
  return a * b;
}
```

### 4. Division Function
```javascript
function divide(a, b) {
  if (b === 0) return "Cannot divide by zero";
  return a / b;
}
```

### 5. Check Even Number
```javascript
function isEven(num) {
  return num % 2 === 0;
}
```

### 6. Check Odd Number
```javascript
function isOdd(num) {
  return num % 2 !== 0;
}
```

### 7. Reverse String
```javascript
function reverseString(str) {
  return str.split('').reverse().join('');
}
```

### 8. Palindrome Check
```javascript
function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanStr === cleanStr.split('').reverse().join('');
}
```

### 9. Find Maximum in Array
```javascript
function findMax(arr) {
  return Math.max(...arr);
}
```

### 10. Find Minimum in Array
```javascript
function findMin(arr) {
  return Math.min(...arr);
}
```

### 11. Count Vowels in String
```javascript
function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
```

### 12. Capitalize First Letter of String
```javascript
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
```

### 13. Sum of Array
```javascript
function sum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}
```

### 14. Average of Array
```javascript
function average(arr) {
  if (arr.length === 0) return 0;
  return sum(arr) / arr.length;
}
```

### 15. Factorial of Number
```javascript
function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
```

### 16. Prime Number Check
```javascript
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
```

### 17. Fibonacci Sequence at Position
```javascript
function fibonacciAt(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
```

### 18. Remove Duplicates from Array
```javascript
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
```

### 19. Count Occurrences of Value in Array
```javascript
function countOccurrences(arr, val) {
  return arr.filter(item => item === val).length;
}
```

### 20. Deep Clone Object
```javascript
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
```

### 21. Convert String to Kebab Case
```javascript
function kebabCase(str) {
  return str.toLowerCase().replace(/\s+/g, '-');
}
```

### 22. Convert String to Camel Case
```javascript
function camelCase(str) {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}
```

### 23. Convert String to Snake Case
```javascript
function snakeCase(str) {
  return str.toLowerCase().replace(/\s+/g, '_');
}
```

### 24. Truncate String to Specified Length
```javascript
function truncate(str, num) {
  if (str.length <= num) return str;
  return str.slice(0, num) + '...';
}
```

### 25. Chunk Array into Smaller Arrays
```javascript
function chunk(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}
```

### 26. Flatten Nested Arrays
```javascript
function flatten(arr) {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}
```

### 27. Find Intersection of Two Arrays
```javascript
function intersection(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}
```

### 28. Find Difference between Two Arrays
```javascript
function difference(arr1, arr2) {
  return arr1.filter(item => !arr2.includes(item));
}
```

### 29. Find Union of Two Arrays
```javascript
function union(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}
```

### 30. Check if Two Strings are Anagrams
```javascript
function isAnagram(str1, str2) {
  const normalize = str => str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
  return normalize(str1) === normalize(str2);
}
```

### 31. Greatest Common Divisor (GCD)
```javascript
function gcd(a, b) {
  if (!b) return a;
  return gcd(b, a % b);
}
```

### 32. Least Common Multiple (LCM)
```javascript
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
```

### 33. Check if Number is Power of Two
```javascript
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}
```

### 34. Calculate Hamming Distance
```javascript
function hammingDistance(str1, str2) {
  if (str1.length !== str2.length) return -1;
  let distance = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) distance++;
  }
  return distance;
}
```

### 35. Convert RGB to Hex
```javascript
function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}
```

### 36. Convert Hex to RGB
```javascript
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
```

### 37. Debounce Function
```javascript
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}
```

### 38. Throttle Function
```javascript
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
```

### 39. Memoize Function
```javascript
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}
```

### 40. Compose Functions
```javascript
function compose(...fns) {
  return fns.reduce((f, g) => (...args) => f(g(...args)));
}
```

### 41. Pipe Functions
```javascript
function pipe(...fns) {
  return fns.reduce((f, g) => (...args) => g(f(...args)));
}
```

### 42. Curry Function
```javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >=