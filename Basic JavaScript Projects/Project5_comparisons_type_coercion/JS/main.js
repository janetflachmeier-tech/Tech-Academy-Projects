// Type Of Operator in JavaScript
document.write(typeof"word");
document.write("<3br>");

//Type coercion in JavaScript
document.write("5"+10); // here number 10 is converted to string and concatenated

// More examples of typeof operator with different data types
var myString = "Hello World";
var myNumber = 42;
var myBoolean = true;
var myArray = [1, 2, 3];
var myObject = {name: "John"};

document.write("<br><br>Additional typeof examples:<br>");
document.write("myString = '" + myString + "' is type: " + typeof myString + "<br>");
document.write("myNumber = " + myNumber + " is type: " + typeof myNumber + "<br>");
document.write("myBoolean = " + myBoolean + " is type: " + typeof myBoolean + "<br>");
document.write("myArray = [" + myArray + "] is type: " + typeof myArray + "<br>");
document.write("myObject is type: " + typeof myObject + "<br>");

// Additional Type Coercion Examples
document.write("<br><strong>Type Coercion Examples:</strong><br>");

// String + Number = String (concatenation)
document.write("'5' + 10 = " + ('5' + 10) + " (string concatenation)<br>");

// String - Number = Number (subtraction)
document.write("'10' - 5 = " + ('10' - 5) + " (converted to number)<br>");

// Boolean to Number coercion
document.write("true + 1 = " + (true + 1) + " (true becomes 1)<br>");
document.write("false + 1 = " + (false + 1) + " (false becomes 0)<br>");

// String to Boolean coercion
document.write("Boolean('hello') = " + Boolean('hello') + " (non-empty string is true)<br>");
document.write("Boolean('') = " + Boolean('') + " (empty string is false)<br>");

// Number to String coercion
document.write("String(123) = '" + String(123) + "' (number to string)<br>");

// Comparison coercion
document.write("'5' == 5 is " + ('5' == 5) + " (loose equality with coercion)<br>");
document.write("'5' === 5 is " + ('5' === 5) + " (strict equality, no coercion)<br>");

// NaN Examples
document.write("<br><strong>NaN (Not a Number) Examples:</strong><br>");

// Creating NaN - dividing string by number
document.write("'hello' / 5 = " + ('hello' / 5) + "<br>");

// Another way to create NaN - invalid math operation
document.write("Math.sqrt(-1) = " + Math.sqrt(-1) + "<br>");

// Subtracting non-numeric string from number
document.write("10 - 'abc' = " + (10 - 'abc') + "<br>");

// isNaN() function examples
document.write("<br><strong>isNaN() Function Examples:</strong><br>");

// isNaN() returns true for NaN values
document.write("isNaN('hello' / 5) = " + isNaN('hello' / 5) + "<br>");
document.write("isNaN(10 - 'abc') = " + isNaN(10 - 'abc') + "<br>");
document.write("isNaN('not a number') = " + isNaN('not a number') + "<br>");

// isNaN() returns false for valid numbers
document.write("isNaN(42) = " + isNaN(42) + "<br>");
document.write("isNaN('123') = " + isNaN('123') + " (string number converts to number)<br>");
document.write("isNaN(true) = " + isNaN(true) + " (boolean converts to number)<br>");

// Infinity Examples using document.getElementById()
// Wait for the DOM to load, then populate the elements
window.onload = function() {
    // Display positive infinity - number larger than maximum floating point
    document.getElementById("positiveInfinity").innerHTML = 2E310;
    
    // Display negative infinity - number smaller than minimum floating point  
    document.getElementById("negativeInfinity").innerHTML = -3E310;
};

// Boolean Logic Examples using comparison operators
document.write("<br><strong>Boolean Logic with Comparison Operators:</strong><br>");

// Greater than operator examples that return true
document.write("10 > 5 = " + (10 > 5) + "<br>");
document.write("100 > 50 = " + (100 > 50) + "<br>");

// Greater than operator examples that return false
document.write("5 > 10 = " + (5 > 10) + "<br>");
document.write("3 > 20 = " + (3 > 20) + "<br>");

// Less than operator examples that return true
document.write("5 < 10 = " + (5 < 10) + "<br>");
document.write("1 < 100 = " + (1 < 100) + "<br>");

// Less than operator examples that return false
document.write("10 < 5 = " + (10 < 5) + "<br>");
document.write("50 < 25 = " + (50 < 25) + "<br>");

// Greater than or equal to examples
document.write("10 >= 10 = " + (10 >= 10) + " (equal values)<br>");
document.write("15 >= 10 = " + (15 >= 10) + " (greater than)<br>");
document.write("5 >= 10 = " + (5 >= 10) + " (less than)<br>");

// Less than or equal to examples
document.write("10 <= 10 = " + (10 <= 10) + " (equal values)<br>");
document.write("5 <= 10 = " + (5 <= 10) + " (less than)<br>");
document.write("15 <= 10 = " + (15 <= 10) + " (greater than)<br>");

//Console.log() Method Examples
console.log(2+2); 
console.log("Hello, this is a console log message!");
console.log(10 > 5); 
console.log("Type of true is: " + typeof true); 

// Additional Math Operations with console.log()
console.log("=== Math Operations in Console ===");
console.log("Addition: 15 + 25 =", 15 + 25);
console.log("Subtraction: 50 - 18 =", 50 - 18);
console.log("Multiplication: 7 * 8 =", 7 * 8);
console.log("Division: 100 / 4 =", 100 / 4);
console.log("Modulus (remainder): 17 % 5 =", 17 % 5);
console.log("Exponentiation: 3 ** 4 =", 3 ** 4);
console.log("Square root: Math.sqrt(64) =", Math.sqrt(64));
console.log("Random number: Math.random() =", Math.random());
console.log("Complex calculation: (10 + 5) * 3 - 8 / 2 =", (10 + 5) * 3 - 8 / 2);

// Boolean Logic Examples that display "false" in console
console.log("=== Boolean Logic Examples (false results) ===");
console.log("5 > 10 =", 5 > 10);
console.log("100 < 50 =", 100 < 50);
console.log("10 === '10' =", 10 === '10');
console.log("true === false =", true === false);
console.log("15 <= 10 =", 15 <= 10);
console.log("20 >= 50 =", 20 >= 50);
console.log("'apple' === 'orange' =", 'apple' === 'orange');
console.log("!(5 < 10) =", !(5 < 10));
console.log("false && true =", false && true);
console.log("Boolean('') =", Boolean(''));
console.log("Boolean(0) =", Boolean(0));
console.log("Boolean(null) =", Boolean(null));

// Loose Equality (==) Examples - Returns both true and false
document.write("<br><strong>Loose Equality (==) Operator Examples:</strong><br>");

// Examples that return TRUE with == operator
document.write("=== Examples that return TRUE ===<br>");
document.write("5 == '5' is " + (5 == '5') + " (number equals string with coercion)<br>");
document.write("true == 1 is " + (true == 1) + " (boolean true equals 1)<br>");
document.write("false == 0 is " + (false == 0) + " (boolean false equals 0)<br>");
document.write("null == undefined is " + (null == undefined) + " (null equals undefined)<br>");
document.write("'10' == 10 is " + ('10' == 10) + " (string equals number with coercion)<br>");
document.write("0 == false is " + (0 == false) + " (zero equals false)<br>");
document.write("'' == false is " + ('' == false) + " (empty string equals false)<br>");

// Examples that return FALSE with == operator
document.write("<br>=== Examples that return FALSE ===<br>");
document.write("5 == '6' is " + (5 == '6') + " (different values)<br>");
document.write("true == 2 is " + (true == 2) + " (true does not equal 2)<br>");
document.write("'hello' == 'world' is " + ('hello' == 'world') + " (different strings)<br>");
document.write("null == 0 is " + (null == 0) + " (null does not equal 0)<br>");
document.write("undefined == 0 is " + (undefined == 0) + " (undefined does not equal 0)<br>");
document.write("'5' == 6 is " + ('5' == 6) + " (different values even with coercion)<br>");
document.write("true == 'true' is " + (true == 'true') + " (boolean true does not equal string 'true')<br>");

// Strict Equality (===) Examples - Specific scenarios
document.write("<br><strong>Strict Equality (===) Operator Examples:</strong><br>");

// 1. Return TRUE by matching both data type and value
document.write("=== Return TRUE (same data type AND same value) ===<br>");
document.write("5 === 5 is " + (5 === 5) + " (same number value and type)<br>");
document.write("'hello' === 'hello' is " + ('hello' === 'hello') + " (same string value and type)<br>");
document.write("true === true is " + (true === true) + " (same boolean value and type)<br>");
document.write("null === null is " + (null === null) + " (same null value and type)<br>");

// 2. Return FALSE with different data type AND different value
document.write("<br>=== Return FALSE (different data type AND different value) ===<br>");
document.write("5 === 'hello' is " + (5 === 'hello') + " (number vs string, different values)<br>");
document.write("true === 42 is " + (true === 42) + " (boolean vs number, different values)<br>");
document.write("'world' === 100 is " + ('world' === 100) + " (string vs number, different values)<br>");

// 3. Return FALSE with different data type but same value
document.write("<br>=== Return FALSE (different data type but same value) ===<br>");
document.write("5 === '5' is " + (5 === '5') + " (number vs string, same value)<br>");
document.write("true === 1 is " + (true === 1) + " (boolean vs number, equivalent values)<br>");
document.write("false === 0 is " + (false === 0) + " (boolean vs number, equivalent values)<br>");
document.write("null === undefined is " + (null === undefined) + " (different types, equivalent values)<br>");

// 4. Return FALSE with same data type but different value
document.write("<br>=== Return FALSE (same data type but different value) ===<br>");
document.write("5 === 10 is " + (5 === 10) + " (both numbers, different values)<br>");
document.write("'hello' === 'world' is " + ('hello' === 'world') + " (both strings, different values)<br>");
document.write("true === false is " + (true === false) + " (both booleans, different values)<br>");
document.write("42 === 99 is " + (42 === 99) + " (both numbers, different values)<br>");

// Logical AND (&&) Operator Examples
document.write("<br><strong>Logical AND (&&) Operator Examples:</strong><br>");

// AND examples that return TRUE (both conditions must be true)
document.write("=== AND Operator - TRUE Results ===<br>");
document.write("true && true is " + (true && true) + " (both operands are true)<br>");
document.write("(5 > 3) && (10 > 8) is " + ((5 > 3) && (10 > 8)) + " (both comparisons are true)<br>");
document.write("(20 === 20) && ('hello' === 'hello') is " + ((20 === 20) && ('hello' === 'hello')) + " (both are true)<br>");
document.write("(100 >= 50) && (2 < 5) is " + ((100 >= 50) && (2 < 5)) + " (both conditions true)<br>");

// AND examples that return FALSE (at least one condition is false)
document.write("<br>=== AND Operator - FALSE Results ===<br>");
document.write("true && false is " + (true && false) + " (one operand is false)<br>");
document.write("false && true is " + (false && true) + " (one operand is false)<br>");
document.write("false && false is " + (false && false) + " (both operands are false)<br>");
document.write("(5 > 10) && (3 < 8) is " + ((5 > 10) && (3 < 8)) + " (first condition is false)<br>");
document.write("(15 === 15) && (10 > 20) is " + ((15 === 15) && (10 > 20)) + " (second condition is false)<br>");

// Logical OR (||) Operator Examples
document.write("<br><strong>Logical OR (||) Operator Examples:</strong><br>");

// OR examples that return TRUE (at least one condition must be true)
document.write("=== OR Operator - TRUE Results ===<br>");
document.write("true || false is " + (true || false) + " (one operand is true)<br>");
document.write("false || true is " + (false || true) + " (one operand is true)<br>");
document.write("true || true is " + (true || true) + " (both operands are true)<br>");
document.write("(5 > 10) || (3 < 8) is " + ((5 > 10) || (3 < 8)) + " (second condition is true)<br>");
document.write("(10 === 10) || (5 > 20) is " + ((10 === 10) || (5 > 20)) + " (first condition is true)<br>");
document.write("(100 < 50) || (15 >= 10) is " + ((100 < 50) || (15 >= 10)) + " (second condition is true)<br>");

// OR examples that return FALSE (both conditions must be false)
document.write("<br>=== OR Operator - FALSE Results ===<br>");
document.write("false || false is " + (false || false) + " (both operands are false)<br>");
document.write("(5 > 10) || (20 < 15) is " + ((5 > 10) || (20 < 15)) + " (both conditions are false)<br>");
document.write("(3 === '3') || (null === undefined) is " + ((3 === '3') || (null === undefined)) + " (both strict comparisons are false)<br>");
document.write("(100 <= 50) || ('apple' === 'orange') is " + ((100 <= 50) || ('apple' === 'orange')) + " (both conditions are false)<br>");

// Logical NOT (!) Operator Examples
document.write("<br><strong>Logical NOT (!) Operator Examples:</strong><br>");

// NOT examples that return TRUE (negating false values)
document.write("=== NOT Operator - TRUE Results (negating false) ===<br>");
document.write("!false is " + (!false) + " (NOT false equals true)<br>");
document.write("!(5 > 10) is " + (!(5 > 10)) + " (NOT of false comparison)<br>");
document.write("!(3 === '3') is " + (!(3 === '3')) + " (NOT of false strict equality)<br>");
document.write("!(null === undefined) is " + (!(null === undefined)) + " (NOT of false comparison)<br>");
document.write("!(20 < 15) is " + (!(20 < 15)) + " (NOT of false comparison)<br>");
document.write("!('apple' === 'orange') is " + (!('apple' === 'orange')) + " (NOT of false string comparison)<br>");

// NOT examples that return FALSE (negating true values)
document.write("<br>=== NOT Operator - FALSE Results (negating true) ===<br>");
document.write("!true is " + (!true) + " (NOT true equals false)<br>");
document.write("!(10 > 5) is " + (!(10 > 5)) + " (NOT of true comparison)<br>");
document.write("!(15 === 15) is " + (!(15 === 15)) + " (NOT of true strict equality)<br>");
document.write("!('hello' === 'hello') is " + (!('hello' === 'hello')) + " (NOT of true string comparison)<br>");
document.write("!(100 >= 50) is " + (!(100 >= 50)) + " (NOT of true comparison)<br>");
document.write("!(2 < 8) is " + (!(2 < 8)) + " (NOT of true comparison)<br>");

// NOT with truthy and falsy values
document.write("<br>=== NOT with Truthy/Falsy Values ===<br>");
document.write("!'hello' is " + (!'hello') + " (NOT of truthy string)<br>");
document.write("!'' is " + (!'') + " (NOT of falsy empty string)<br>");
document.write("!0 is " + (!0) + " (NOT of falsy zero)<br>");
document.write("!42 is " + (!42) + " (NOT of truthy number)<br>");
document.write("!null is " + (!null) + " (NOT of falsy null)<br>");
document.write("!undefined is " + (!undefined) + " (NOT of falsy undefined)<br>");
