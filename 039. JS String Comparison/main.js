var a = 'abc';
var b = 'bcd';

console.log(a == b);
console.log(a > b);
console.log(a < b);

// javascript uses lexicographic system to compare to string
// lexical order z,y,x...a, Z,Y,X...B,A

console.log('z' > "Z");
console.log('a' > "Z");

var a = 'abc';
var b = 'acd';

console.log(a == b);
console.log(a > b);
console.log(a < b);


var a = 'aaaZ';
var b = 'aaaz';

console.log(a == b);
console.log(a > b);
console.log(a < b);

console.log('001' == 1);
/* The expression `console.log('001' == 1)` outputs **`true`** due to type coercion in JavaScript's **loose equality operator (`==`)**. Here's how it works:

### Step-by-step explanation:
1. **Equality operator (`==`)** in JavaScript performs **type coercion**, which means it tries to compare values even if they are of different types (e.g., string and number).
   
2. When you use the loose equality operator (`==`), JavaScript converts both operands to the same type before making the comparison. In this case, you're comparing:
   - `'001'` (a string) 
   - `1` (a number)

3. **String to Number Conversion**: The string `'001'` is automatically converted to a number when compared with a number. In JavaScript, `'001'` is a string that represents the number `1`. So, the string `'001'` is **converted** to the number `1`.

4. Now, the comparison becomes:
   ```js
   1 == 1
   ```
   This is obviously **true**, because both sides are equal.

### Why does type coercion happen?

JavaScript's `==` operator is designed to convert operands to a common type before making the comparison. In this case:
- The string `'001'` is interpreted as a number because it consists of digits (ignoring leading zeros), so it's converted to `1`.
- The comparison then becomes `1 == 1`, which is true.

### Important note:
If you use the **strict equality operator (`===`)**, JavaScript **does not** perform type coercion. It requires both the value and the type to be exactly the same. For example:
```js
console.log('001' === 1); // false
```
This would output **false** because `'001'` is a string, and `1` is a number, and they are of different types.

### Summary:
The expression `console.log('001' == 1)` outputs `true` because of **type coercion** in the loose equality operator (`==`). The string `'001'` is converted to the number `1`, and then `1 == 1` evaluates to `true`. */