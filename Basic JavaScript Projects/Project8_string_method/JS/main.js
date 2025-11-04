// ===== STRING METHODS - CONCAT() DEMONSTRATION =====

// Example 1: Basic concat() with two strings
function concatTwoStrings() {
    var firstName = "John";
    var lastName = "Doe";
    
    // Using concat() method to connect two strings
    var fullName = firstName.concat(" ", lastName);
    
    console.log("First name: " + firstName);
    console.log("Last name: " + lastName);
    console.log("Full name using concat(): " + fullName);
    
    // Display result in HTML
    document.getElementById("concatResult1").innerHTML = 
        "First: " + firstName + "<br>Last: " + lastName + "<br>Full: " + fullName;
}

// Example 2: Concat() with multiple strings
function concatMultipleStrings() {
    var greeting = "Hello";
    var space = " ";
    var name = "World";
    var punctuation = "!";
    var extraMessage = " Welcome to JavaScript.";
    
    // Using concat() method to connect multiple strings
    var completeMessage = greeting.concat(space, name, punctuation, extraMessage);
    
    console.log("Complete message: " + completeMessage);
    
    // Display result in HTML
    document.getElementById("concatResult2").innerHTML = 
        "Complete Message: " + completeMessage;
}

// Example 3: Concat() in a practical sentence builder
function buildSentence() {
    var subject = "The quick brown fox";
    var verb = " jumps over";
    var object = " the lazy dog";
    var ending = ".";
    
    // Using concat() to build a complete sentence
    var sentence = subject.concat(verb, object, ending);
    
    console.log("Built sentence: " + sentence);
    
    // Display result in HTML
    document.getElementById("concatResult3").innerHTML = 
        "Built Sentence: " + sentence;
}

// Example 4: Interactive concat() with user input
function concatUserInput() {
    // Get values from input fields (if they exist)
    var userFirstName = document.getElementById("userFirstName") ? 
                       document.getElementById("userFirstName").value : "User";
    var userLastName = document.getElementById("userLastName") ? 
                      document.getElementById("userLastName").value : "Name";
    
    // Use concat() to create personalized message
    var personalMessage = "Hello, ".concat(userFirstName, " ", userLastName, "! Welcome to our website.");
    
    console.log("Personal message: " + personalMessage);
    
    // Display result in HTML
    document.getElementById("concatResult4").innerHTML = personalMessage;
}

// Example 5: Demonstrating concat() vs + operator
function compareStringMethods() {
    var str1 = "JavaScript";
    var str2 = " is";
    var str3 = " awesome!";
    
    // Method 1: Using concat()
    var resultConcat = str1.concat(str2, str3);
    
    // Method 2: Using + operator
    var resultPlus = str1 + str2 + str3;
    
    console.log("Using concat(): " + resultConcat);
    console.log("Using + operator: " + resultPlus);
    console.log("Results are equal: " + (resultConcat === resultPlus));
    
    // Display comparison in HTML
    document.getElementById("concatResult5").innerHTML = 
        "Concat method: " + resultConcat + "<br>" +
        "Plus operator: " + resultPlus + "<br>" +
        "Results equal: " + (resultConcat === resultPlus);
}

// ===== STRING METHODS - SLICE() DEMONSTRATION =====

// Example 1: Basic slice() method to extract part of a string
function basicSliceDemo() {
    var originalString = "JavaScript Programming";
    
    // Using slice() to extract different sections
    var firstPart = originalString.slice(0, 10);     // "JavaScript"
    var secondPart = originalString.slice(11);       // "Programming"
    var middlePart = originalString.slice(4, 10);    // "Script"
    
    console.log("Original string: " + originalString);
    console.log("First part (0, 10): " + firstPart);
    console.log("Second part (11): " + secondPart);
    console.log("Middle part (4, 10): " + middlePart);
    
    // Display result in HTML
    document.getElementById("sliceResult1").innerHTML = 
        "Original: " + originalString + "<br>" +
        "slice(0, 10): " + firstPart + "<br>" +
        "slice(11): " + secondPart + "<br>" +
        "slice(4, 10): " + middlePart;
}

// Example 2: Slice() with negative indices
function negativeSliceDemo() {
    var sentence = "The quick brown fox jumps over the lazy dog";
    
    // Using negative indices to slice from the end
    var lastWord = sentence.slice(-3);          // "dog"
    var lastFiveChars = sentence.slice(-5);     // "y dog"
    var middleSection = sentence.slice(-20, -10); // "over the l"
    
    console.log("Original sentence: " + sentence);
    console.log("Last 3 characters: " + lastWord);
    console.log("Last 5 characters: " + lastFiveChars);
    console.log("Middle section (-20, -10): " + middleSection);
    
    // Display result in HTML
    document.getElementById("sliceResult2").innerHTML = 
        "Original: " + sentence + "<br>" +
        "slice(-3): " + lastWord + "<br>" +
        "slice(-5): " + lastFiveChars + "<br>" +
        "slice(-20, -10): " + middleSection;
}

// Example 3: Interactive slice() with user input
function interactiveSlice() {
    // Get user input or use default
    var userString = document.getElementById("sliceInput") ? 
                    document.getElementById("sliceInput").value : "Hello World!";
    var startIndex = document.getElementById("startIndex") ? 
                    parseInt(document.getElementById("startIndex").value) : 0;
    var endIndex = document.getElementById("endIndex") ? 
                  parseInt(document.getElementById("endIndex").value) : userString.length;
    
    // Use slice() method with user-provided indices
    var slicedResult = userString.slice(startIndex, endIndex);
    
    console.log("User string: " + userString);
    console.log("Start index: " + startIndex);
    console.log("End index: " + endIndex);
    console.log("Sliced result: " + slicedResult);
    
    // Display result in HTML
    document.getElementById("sliceResult3").innerHTML = 
        "Original: " + userString + "<br>" +
        "Indices: " + startIndex + " to " + endIndex + "<br>" +
        "Result: " + slicedResult;
}

// Example 4: Practical slice() applications
function practicalSliceDemo() {
    var email = "user@example.com";
    var url = "https://www.javascript.com/tutorials";
    var phoneNumber = "123-456-7890";
    
    // Extract useful parts using slice()
    var username = email.slice(0, email.indexOf("@"));
    var domain = email.slice(email.indexOf("@") + 1);
    var protocol = url.slice(0, url.indexOf("://"));
    var website = url.slice(url.indexOf("://") + 3);
    var areaCode = phoneNumber.slice(0, 3);
    var phoneMain = phoneNumber.slice(4);
    
    console.log("Email username: " + username);
    console.log("Email domain: " + domain);
    console.log("URL protocol: " + protocol);
    console.log("Website: " + website);
    console.log("Area code: " + areaCode);
    console.log("Phone main: " + phoneMain);
    
    // Display results in HTML
    document.getElementById("sliceResult4").innerHTML = 
        "Email: " + email + " → Username: " + username + ", Domain: " + domain + "<br>" +
        "URL: " + url + " → Protocol: " + protocol + ", Site: " + website + "<br>" +
        "Phone: " + phoneNumber + " → Area: " + areaCode + ", Main: " + phoneMain;
}

// ===== STRING METHODS - TOUPPERCASE() DEMONSTRATION =====
// Definition: The toUpperCase() method converts all characters in a string to uppercase letters
// Syntax: string.toUpperCase()
// Returns: A new string with all characters converted to uppercase
// Note: Does not modify the original string

// Example 1: Basic toUpperCase() demonstration
function basicUpperCaseDemo() {
    var originalText = "Hello World! Welcome to JavaScript Programming.";
    
    // Using toUpperCase() method
    var upperCaseText = originalText.toUpperCase();
    
    console.log("Original text: " + originalText);
    console.log("Uppercase text: " + upperCaseText);
    console.log("Original unchanged: " + originalText); // Proves original is unchanged
    
    // Display result in HTML
    document.getElementById("upperCaseResult1").innerHTML = 
        "Original: " + originalText + "<br>" +
        "Uppercase: " + upperCaseText + "<br>" +
        "Original Unchanged: " + (originalText === "Hello World! Welcome to JavaScript Programming.");
}

// Example 2: Practical toUpperCase() applications
function practicalUpperCaseDemo() {
    var userInput = "john.doe@email.com";
    var countryCode = "usa";
    var productCode = "abc123xyz";
    
    // Converting for consistency and validation
    var emailUpper = userInput.toUpperCase();
    var countryUpper = countryCode.toUpperCase();
    var productUpper = productCode.toUpperCase();
    
    console.log("Email uppercase: " + emailUpper);
    console.log("Country code: " + countryUpper);
    console.log("Product code: " + productUpper);
    
    // Display results in HTML
    document.getElementById("upperCaseResult2").innerHTML = 
        "Email: " + userInput + " → " + emailUpper + "<br>" +
        "Country: " + countryCode + " → " + countryUpper + "<br>" +
        "Product: " + productCode + " → " + productUpper;
}

// Example 3: Interactive toUpperCase() with user input
function interactiveUpperCase() {
    // Get user input or use default
    var userText = document.getElementById("upperCaseInput") ? 
                   document.getElementById("upperCaseInput").value : "Enter some text!";
    
    // Apply toUpperCase() method
    var result = userText.toUpperCase();
    
    console.log("User input: " + userText);
    console.log("Uppercase result: " + result);
    
    // Display result in HTML
    document.getElementById("upperCaseResult3").innerHTML = 
        "Original: " + userText + "<br>" +
        "Uppercase: " + result;
}

// ===== STRING METHODS - SEARCH() DEMONSTRATION =====
// Definition: The search() method searches for a specified value in a string using regular expressions
// Syntax: string.search(searchValue)
// Returns: The index of the first match, or -1 if no match is found
// Note: Similar to indexOf() but supports regular expressions

// Example 1: Basic search() demonstration
function basicSearchDemo() {
    var sampleText = "JavaScript is a powerful programming language. JavaScript rocks!";
    
    // Using search() method with different search terms
    var searchScript = sampleText.search("Script");
    var searchPower = sampleText.search("powerful");
    var searchNotFound = sampleText.search("Python");
    
    console.log("Sample text: " + sampleText);
    console.log("Search 'Script': " + searchScript);
    console.log("Search 'powerful': " + searchPower);
    console.log("Search 'Python': " + searchNotFound);
    
    // Display results in HTML
    document.getElementById("searchResult1").innerHTML = 
        "Text: " + sampleText + "<br>" +
        "search('Script'): " + searchScript + "<br>" +
        "search('powerful'): " + searchPower + "<br>" +
        "search('Python'): " + searchNotFound + " (not found)";
}

// Example 2: search() with regular expressions
function regexSearchDemo() {
    var emailText = "Contact us at support@company.com or sales@business.org";
    
    // Using search() with regular expressions
    var searchEmail = emailText.search(/\w+@\w+\.\w+/); // Email pattern
    var searchNumbers = emailText.search(/\d+/); // Number pattern
    var searchCapital = emailText.search(/[A-Z]/); // Capital letter
    
    console.log("Email text: " + emailText);
    console.log("Search email pattern: " + searchEmail);
    console.log("Search numbers: " + searchNumbers);
    console.log("Search capital letter: " + searchCapital);
    
    // Display results in HTML
    document.getElementById("searchResult2").innerHTML = 
        "Text: " + emailText + "<br>" +
        "Email pattern found at: " + searchEmail + "<br>" +
        "Numbers found at: " + searchNumbers + " (none = -1)<br>" +
        "Capital letter at: " + searchCapital;
}

// Example 3: Interactive search() method
function interactiveSearch() {
    // Get user input or use defaults
    var searchText = document.getElementById("searchTextInput") ? 
                    document.getElementById("searchTextInput").value : "The quick brown fox jumps over the lazy dog";
    var searchTerm = document.getElementById("searchTermInput") ? 
                    document.getElementById("searchTermInput").value : "fox";
    
    // Apply search() method
    var searchResult = searchText.search(searchTerm);
    
    console.log("Search text: " + searchText);
    console.log("Search term: " + searchTerm);
    console.log("Search result: " + searchResult);
    
    // Create result message
    var resultMessage = searchResult !== -1 ? 
        "Found '" + searchTerm + "' at position " + searchResult :
        "'" + searchTerm + "' not found in the text";
    
    // Display result in HTML
    document.getElementById("searchResult3").innerHTML = 
        "Text: " + searchText + "<br>" +
        "Searching for: " + searchTerm + "<br>" +
        "Result: " + resultMessage;
}

// Example 4: Comparing search() vs indexOf()
function compareSearchMethods() {
    var testString = "JavaScript Programming with JavaScript";
    var searchTerm = "JavaScript";
    
    // Using both methods
    var searchResult = testString.search(searchTerm);
    var indexOfResult = testString.indexOf(searchTerm);
    
    // Using search with regex (case insensitive)
    var regexSearch = testString.search(/javascript/i);
    
    console.log("Test string: " + testString);
    console.log("search() result: " + searchResult);
    console.log("indexOf() result: " + indexOfResult);
    console.log("search() with regex (case insensitive): " + regexSearch);
    
    // Display comparison in HTML
    document.getElementById("searchResult4").innerHTML = 
        "Text: " + testString + "<br>" +
        "search('" + searchTerm + "'): " + searchResult + "<br>" +
        "indexOf('" + searchTerm + "'): " + indexOfResult + "<br>" +
        "search(/javascript/i): " + regexSearch + " (case insensitive)";
}

// ===== NUMBER METHODS - TOSTRING() DEMONSTRATION =====
// Definition: The toString() method converts a number to a string
// Syntax: number.toString(radix) - radix is optional (2-36) for number base
// Returns: A string representation of the number
// Use Cases: Data conversion, display formatting, concatenation preparation

// Example 1: Basic toString() method demonstration
function basicToStringDemo() {
    var numberValue = 42;
    var floatValue = 3.14159;
    var negativeValue = -100;
    var largeNumber = 1234567890;
    
    // Using toString() method to convert numbers to strings
    var numberString = numberValue.toString();
    var floatString = floatValue.toString();
    var negativeString = negativeValue.toString();
    var largeString = largeNumber.toString();
    
    console.log("Original number: " + numberValue + " (type: " + typeof numberValue + ")");
    console.log("toString() result: " + numberString + " (type: " + typeof numberString + ")");
    console.log("Float toString(): " + floatString + " (type: " + typeof floatString + ")");
    console.log("Negative toString(): " + negativeString + " (type: " + typeof negativeString + ")");
    console.log("Large number toString(): " + largeString + " (type: " + typeof largeString + ")");
    
    // Display results in HTML
    document.getElementById("toStringResult1").innerHTML = 
        "Number: " + numberValue + " → toString(): \"" + numberString + "\" (type: " + typeof numberString + ")<br>" +
        "Float: " + floatValue + " → toString(): \"" + floatString + "\" (type: " + typeof floatString + ")<br>" +
        "Negative: " + negativeValue + " → toString(): \"" + negativeString + "\" (type: " + typeof negativeString + ")<br>" +
        "Large: " + largeNumber + " → toString(): \"" + largeString + "\" (type: " + typeof largeString + ")";
}

// Example 2: toString() with different number bases (radix)
function radixToStringDemo() {
    var decimalNumber = 255;
    
    // Using toString() with different radix values
    var binaryString = decimalNumber.toString(2);      // Base 2 (binary)
    var octalString = decimalNumber.toString(8);       // Base 8 (octal)
    var hexString = decimalNumber.toString(16);        // Base 16 (hexadecimal)
    var base36String = decimalNumber.toString(36);     // Base 36 (maximum)
    
    console.log("Decimal number: " + decimalNumber);
    console.log("Binary (base 2): " + binaryString);
    console.log("Octal (base 8): " + octalString);
    console.log("Hexadecimal (base 16): " + hexString);
    console.log("Base 36: " + base36String);
    
    // Display results in HTML
    document.getElementById("toStringResult2").innerHTML = 
        "Decimal: " + decimalNumber + "<br>" +
        "Binary (base 2): " + binaryString + "<br>" +
        "Octal (base 8): " + octalString + "<br>" +
        "Hexadecimal (base 16): " + hexString + "<br>" +
        "Base 36: " + base36String;
}

// Example 3: Practical toString() applications
function practicalToStringDemo() {
    var productId = 12345;
    var price = 29.99;
    var quantity = 5;
    var year = 2025;
    
    // Converting numbers to strings for various purposes
    var productIdString = productId.toString();
    var priceString = price.toString();
    var quantityString = quantity.toString();
    var yearString = year.toString();
    
    // Creating formatted strings using toString()
    var productCode = "PROD-" + productIdString;
    var priceDisplay = "$" + priceString;
    var inventoryMessage = "Quantity: " + quantityString + " items";
    var copyrightYear = "© " + yearString;
    
    console.log("Product code: " + productCode);
    console.log("Price display: " + priceDisplay);
    console.log("Inventory: " + inventoryMessage);
    console.log("Copyright: " + copyrightYear);
    
    // Display results in HTML
    document.getElementById("toStringResult3").innerHTML = 
        "Product ID: " + productId + " → " + productCode + "<br>" +
        "Price: " + price + " → " + priceDisplay + "<br>" +
        "Quantity: " + quantity + " → " + inventoryMessage + "<br>" +
        "Year: " + year + " → " + copyrightYear;
}

// Example 4: Interactive toString() with user input
function interactiveToString() {
    // Get user input or use default
    var userNumber = document.getElementById("toStringInput") ? 
                    parseFloat(document.getElementById("toStringInput").value) : 123;
    var userRadix = document.getElementById("radixInput") ? 
                   parseInt(document.getElementById("radixInput").value) : 10;
    
    // Validate radix (must be between 2 and 36)
    if (userRadix < 2 || userRadix > 36) {
        userRadix = 10;
    }
    
    // Apply toString() method
    var stringResult = userNumber.toString(userRadix);
    
    console.log("User number: " + userNumber);
    console.log("User radix: " + userRadix);
    console.log("toString() result: " + stringResult);
    
    // Display result in HTML
    document.getElementById("toStringResult4").innerHTML = 
        "Number: " + userNumber + "<br>" +
        "Base: " + userRadix + "<br>" +
        "toString() Result: \"" + stringResult + "\" (type: " + typeof stringResult + ")";
}

// Example 5: Demonstrating toString() vs String() vs concatenation
function compareNumberConversion() {
    var testNumber = 456;
    
    // Different ways to convert number to string
    var method1 = testNumber.toString();
    var method2 = String(testNumber);
    var method3 = testNumber + "";
    var method4 = "" + testNumber;
    
    console.log("Original number: " + testNumber + " (type: " + typeof testNumber + ")");
    console.log("toString(): " + method1 + " (type: " + typeof method1 + ")");
    console.log("String(): " + method2 + " (type: " + typeof method2 + ")");
    console.log("number + '': " + method3 + " (type: " + typeof method3 + ")");
    console.log("'' + number: " + method4 + " (type: " + typeof method4 + ")");
    
    // Check if all results are equal
    var allEqual = (method1 === method2) && (method2 === method3) && (method3 === method4);
    
    // Display comparison in HTML
    document.getElementById("toStringResult5").innerHTML = 
        "Number: " + testNumber + " (type: " + typeof testNumber + ")<br>" +
        "toString(): \"" + method1 + "\" (type: " + typeof method1 + ")<br>" +
        "String(): \"" + method2 + "\" (type: " + typeof method2 + ")<br>" +
        "number + '': \"" + method3 + "\" (type: " + typeof method3 + ")<br>" +
        "'' + number: \"" + method4 + "\" (type: " + typeof method4 + ")<br>" +
        "All methods equal: " + allEqual;
}

// ===== NUMBER METHODS - TOPRECISION() DEMONSTRATION =====
// Definition: The toPrecision() method returns a string representation of a number with a specified precision (number of significant digits)
// Syntax: number.toPrecision(precision) - precision is optional (1-100)
// Returns: A string representation of the number with specified precision
// Use Cases: Scientific notation, data formatting, precise calculations display

// Example 1: Basic toPrecision() method demonstration
function basicToPrecisionDemo() {
    var originalNumber = 123.456789;
    
    // Using toPrecision() with different precision values
    var precision1 = originalNumber.toPrecision(1);    // "1e+2" (scientific notation)
    var precision3 = originalNumber.toPrecision(3);    // "123"
    var precision5 = originalNumber.toPrecision(5);    // "123.46"
    var precision8 = originalNumber.toPrecision(8);    // "123.45679"
    
    console.log("Original number: " + originalNumber);
    console.log("toPrecision(1): " + precision1);
    console.log("toPrecision(3): " + precision3);
    console.log("toPrecision(5): " + precision5);
    console.log("toPrecision(8): " + precision8);
    
    // Display results in HTML
    document.getElementById("toPrecisionResult1").innerHTML = 
        "Original: " + originalNumber + "<br>" +
        "toPrecision(1): " + precision1 + "<br>" +
        "toPrecision(3): " + precision3 + "<br>" +
        "toPrecision(5): " + precision5 + "<br>" +
        "toPrecision(8): " + precision8;
}

// Example 2: toPrecision() with different types of numbers
function variousToPrecisionDemo() {
    var smallNumber = 0.000123456;
    var largeNumber = 9876543.21;
    var wholeNumber = 42;
    var negativeNumber = -789.123;
    
    // Apply toPrecision(4) to all numbers
    var smallPrecision = smallNumber.toPrecision(4);
    var largePrecision = largeNumber.toPrecision(4);
    var wholePrecision = wholeNumber.toPrecision(4);
    var negativePrecision = negativeNumber.toPrecision(4);
    
    console.log("Small number: " + smallNumber + " → toPrecision(4): " + smallPrecision);
    console.log("Large number: " + largeNumber + " → toPrecision(4): " + largePrecision);
    console.log("Whole number: " + wholeNumber + " → toPrecision(4): " + wholePrecision);
    console.log("Negative number: " + negativeNumber + " → toPrecision(4): " + negativePrecision);
    
    // Display results in HTML
    document.getElementById("toPrecisionResult2").innerHTML = 
        "Small: " + smallNumber + " → " + smallPrecision + "<br>" +
        "Large: " + largeNumber + " → " + largePrecision + "<br>" +
        "Whole: " + wholeNumber + " → " + wholePrecision + "<br>" +
        "Negative: " + negativeNumber + " → " + negativePrecision;
}

// Example 3: Practical toPrecision() applications
function practicalToPrecisionDemo() {
    var temperature = 98.6789;
    var distance = 1234567.89;
    var percentage = 0.123456;
    var price = 19.999;
    
    // Using toPrecision() for practical formatting
    var tempDisplay = parseFloat(temperature.toPrecision(4)) + "°F";
    var distanceDisplay = distance.toPrecision(3) + " miles";
    var percentDisplay = (percentage * 100).toPrecision(3) + "%";
    var priceDisplay = "$" + parseFloat(price.toPrecision(3));
    
    console.log("Temperature: " + temperature + " → " + tempDisplay);
    console.log("Distance: " + distance + " → " + distanceDisplay);
    console.log("Percentage: " + percentage + " → " + percentDisplay);
    console.log("Price: " + price + " → " + priceDisplay);
    
    // Display results in HTML
    document.getElementById("toPrecisionResult3").innerHTML = 
        "Temperature: " + temperature + " → " + tempDisplay + "<br>" +
        "Distance: " + distance + " → " + distanceDisplay + "<br>" +
        "Percentage: " + percentage + " → " + percentDisplay + "<br>" +
        "Price: " + price + " → " + priceDisplay;
}

// Example 4: Interactive toPrecision() with user input
function interactiveToPrecision() {
    // Get user input or use defaults
    var userNumber = document.getElementById("toPrecisionInput") ? 
                    parseFloat(document.getElementById("toPrecisionInput").value) : 123.456789;
    var userPrecision = document.getElementById("precisionInput") ? 
                       parseInt(document.getElementById("precisionInput").value) : 4;
    
    // Validate precision (must be between 1 and 100)
    if (userPrecision < 1 || userPrecision > 100) {
        userPrecision = 4;
    }
    
    // Apply toPrecision() method
    var precisionResult = userNumber.toPrecision(userPrecision);
    
    console.log("User number: " + userNumber);
    console.log("User precision: " + userPrecision);
    console.log("toPrecision() result: " + precisionResult);
    
    // Display result in HTML
    document.getElementById("toPrecisionResult4").innerHTML = 
        "Number: " + userNumber + "<br>" +
        "Precision: " + userPrecision + " significant digits<br>" +
        "toPrecision() Result: \"" + precisionResult + "\" (type: " + typeof precisionResult + ")";
}

// Example 5: Comparing toPrecision() vs toFixed() vs toString()
function comparePrecisionMethods() {
    var testNumber = 123.456789;
    var digits = 4;
    
    // Different formatting methods
    var toPrecisionResult = testNumber.toPrecision(digits);
    var toFixedResult = testNumber.toFixed(digits);
    var toStringResult = testNumber.toString();
    
    console.log("Original number: " + testNumber);
    console.log("toPrecision(" + digits + "): " + toPrecisionResult);
    console.log("toFixed(" + digits + "): " + toFixedResult);
    console.log("toString(): " + toStringResult);
    
    // Scientific notation example
    var largeNumber = 1234567890.123;
    var scientificPrecision = largeNumber.toPrecision(3);
    
    console.log("Large number: " + largeNumber);
    console.log("Scientific notation: " + scientificPrecision);
    
    // Display comparison in HTML
    document.getElementById("toPrecisionResult5").innerHTML = 
        "Number: " + testNumber + "<br>" +
        "toPrecision(" + digits + "): " + toPrecisionResult + " (significant digits)<br>" +
        "toFixed(" + digits + "): " + toFixedResult + " (decimal places)<br>" +
        "toString(): " + toStringResult + " (as-is)<br>" +
        "Large number: " + largeNumber + " → " + scientificPrecision + " (scientific)";
}

// ===== NUMBER METHODS - TOFIXED() DEMONSTRATION =====
// Definition: The toFixed() method formats a number to a specified number of decimal places
// Syntax: number.toFixed(digits) - digits is optional (0-100)
// Returns: A string representation of the number with fixed decimal places
// Use Cases: Currency formatting, precise decimal display, rounding for display

// Example 1: Basic toFixed() method demonstration
function basicToFixedDemo() {
    var originalNumber = 123.456789;
    
    // Using toFixed() with different decimal places
    var fixed0 = originalNumber.toFixed(0);     // "123"
    var fixed2 = originalNumber.toFixed(2);     // "123.46"
    var fixed4 = originalNumber.toFixed(4);     // "123.4568"
    var fixed6 = originalNumber.toFixed(6);     // "123.456789"
    
    console.log("Original number: " + originalNumber);
    console.log("toFixed(0): " + fixed0);
    console.log("toFixed(2): " + fixed2);
    console.log("toFixed(4): " + fixed4);
    console.log("toFixed(6): " + fixed6);
    
    // Display results in HTML
    document.getElementById("toFixedResult1").innerHTML = 
        "Original: " + originalNumber + "<br>" +
        "toFixed(0): " + fixed0 + "<br>" +
        "toFixed(2): " + fixed2 + "<br>" +
        "toFixed(4): " + fixed4 + "<br>" +
        "toFixed(6): " + fixed6;
}

// Example 2: toFixed() for currency and financial formatting
function currencyToFixedDemo() {
    var price1 = 19.9;
    var price2 = 25;
    var price3 = 99.999;
    var taxRate = 0.0825;
    
    // Format prices with toFixed() for currency display
    var price1Display = "$" + price1.toFixed(2);
    var price2Display = "$" + price2.toFixed(2);
    var price3Display = "$" + price3.toFixed(2);
    var taxDisplay = (taxRate * 100).toFixed(2) + "%";
    
    // Calculate total with tax
    var subtotal = price1 + price2 + price3;
    var tax = subtotal * taxRate;
    var total = subtotal + tax;
    
    console.log("Price 1: " + price1Display);
    console.log("Price 2: " + price2Display);
    console.log("Price 3: " + price3Display);
    console.log("Tax rate: " + taxDisplay);
    console.log("Total: $" + total.toFixed(2));
    
    // Display results in HTML
    document.getElementById("toFixedResult2").innerHTML = 
        "Item 1: " + price1Display + "<br>" +
        "Item 2: " + price2Display + "<br>" +
        "Item 3: " + price3Display + "<br>" +
        "Tax Rate: " + taxDisplay + "<br>" +
        "Subtotal: $" + subtotal.toFixed(2) + "<br>" +
        "Tax: $" + tax.toFixed(2) + "<br>" +
        "Total: $" + total.toFixed(2);
}

// Example 3: Interactive toFixed() with user input
function interactiveToFixed() {
    // Get user input or use defaults
    var userNumber = document.getElementById("toFixedInput") ? 
                    parseFloat(document.getElementById("toFixedInput").value) : 123.456789;
    var userDecimals = document.getElementById("decimalsInput") ? 
                      parseInt(document.getElementById("decimalsInput").value) : 2;
    
    // Validate decimals (must be between 0 and 100)
    if (userDecimals < 0 || userDecimals > 100) {
        userDecimals = 2;
    }
    
    // Apply toFixed() method
    var fixedResult = userNumber.toFixed(userDecimals);
    
    console.log("User number: " + userNumber);
    console.log("User decimals: " + userDecimals);
    console.log("toFixed() result: " + fixedResult);
    
    // Display result in HTML
    document.getElementById("toFixedResult3").innerHTML = 
        "Number: " + userNumber + "<br>" +
        "Decimal Places: " + userDecimals + "<br>" +
        "toFixed() Result: \"" + fixedResult + "\" (type: " + typeof fixedResult + ")";
}

// ===== OBJECT METHODS - VALUEOF() DEMONSTRATION =====
// Definition: The valueOf() method returns the primitive value of an object
// Syntax: object.valueOf()
// Returns: The primitive value of the specified object
// Use Cases: Type conversion, comparison operations, accessing wrapped primitive values

// Example 1: Basic valueOf() method demonstration
function basicValueOfDemo() {
    // Different types of objects and their valueOf() results
    var numberObj = new Number(42);
    var stringObj = new String("Hello World");
    var booleanObj = new Boolean(true);
    var dateObj = new Date();
    
    // Using valueOf() to get primitive values
    var numberValue = numberObj.valueOf();
    var stringValue = stringObj.valueOf();
    var booleanValue = booleanObj.valueOf();
    var dateValue = dateObj.valueOf();
    
    console.log("Number object: " + numberObj + " → valueOf(): " + numberValue + " (type: " + typeof numberValue + ")");
    console.log("String object: " + stringObj + " → valueOf(): " + stringValue + " (type: " + typeof stringValue + ")");
    console.log("Boolean object: " + booleanObj + " → valueOf(): " + booleanValue + " (type: " + typeof booleanValue + ")");
    console.log("Date object: " + dateObj + " → valueOf(): " + dateValue + " (type: " + typeof dateValue + ")");
    
    // Display results in HTML
    document.getElementById("valueOfResult1").innerHTML = 
        "Number Object: " + numberObj + " → valueOf(): " + numberValue + " (type: " + typeof numberValue + ")<br>" +
        "String Object: " + stringObj + " → valueOf(): " + stringValue + " (type: " + typeof stringValue + ")<br>" +
        "Boolean Object: " + booleanObj + " → valueOf(): " + booleanValue + " (type: " + typeof booleanValue + ")<br>" +
        "Date Object: " + dateObj.toDateString() + " → valueOf(): " + dateValue + " (timestamp)";
}

// Example 2: valueOf() in comparisons and calculations
function valueOfComparisonDemo() {
    var num1 = new Number(25);
    var num2 = new Number(25);
    var primitive1 = 25;
    
    // Object comparison vs valueOf() comparison
    var objectComparison = (num1 == num2);
    var valueOfComparison = (num1.valueOf() == num2.valueOf());
    var primitiveComparison = (num1.valueOf() == primitive1);
    
    // Mathematical operations
    var sum = num1.valueOf() + num2.valueOf();
    var product = num1.valueOf() * primitive1;
    
    console.log("Object comparison (num1 == num2): " + objectComparison);
    console.log("valueOf() comparison: " + valueOfComparison);
    console.log("valueOf() vs primitive: " + primitiveComparison);
    console.log("Sum using valueOf(): " + sum);
    console.log("Product using valueOf(): " + product);
    
    // Display results in HTML
    document.getElementById("valueOfResult2").innerHTML = 
        "num1: " + num1 + ", num2: " + num2 + "<br>" +
        "Object comparison (num1 == num2): " + objectComparison + "<br>" +
        "valueOf() comparison: " + valueOfComparison + "<br>" +
        "valueOf() vs primitive: " + primitiveComparison + "<br>" +
        "Sum: " + num1.valueOf() + " + " + num2.valueOf() + " = " + sum + "<br>" +
        "Product: " + num1.valueOf() + " × " + primitive1 + " = " + product;
}

// Example 3: Custom valueOf() method
function customValueOfDemo() {
    // Create a custom object with valueOf() method
    var customObject = {
        value: 100,
        currency: "USD",
        valueOf: function() {
            return this.value;
        },
        toString: function() {
            return this.value + " " + this.currency;
        }
    };
    
    // Test custom valueOf()
    var primitiveValue = customObject.valueOf();
    var stringValue = customObject.toString();
    var mathResult = customObject + 50; // Uses valueOf() implicitly
    
    console.log("Custom object: " + customObject);
    console.log("valueOf(): " + primitiveValue);
    console.log("Math operation (obj + 50): " + mathResult);
    
    // Display results in HTML
    document.getElementById("valueOfResult3").innerHTML = 
        "Custom Object: " + customObject + "<br>" +
        "valueOf(): " + primitiveValue + "<br>" +
        "toString(): " + stringValue + "<br>" +
        "Math Operation (obj + 50): " + mathResult + "<br>" +
        "Type of valueOf(): " + typeof primitiveValue;
}

// Example 4: Practical valueOf() applications
function practicalValueOfDemo() {
    var today = new Date();
    var futureDate = new Date(today.getTime() + (7 * 24 * 60 * 60 * 1000)); // 7 days later
    
    // Using valueOf() for date calculations
    var todayTimestamp = today.valueOf();
    var futureTimestamp = futureDate.valueOf();
    var timeDifference = futureTimestamp - todayTimestamp;
    var daysDifference = timeDifference / (24 * 60 * 60 * 1000);
    
    // Number objects for calculation
    var price = new Number(29.99);
    var quantity = new Number(3);
    var total = price.valueOf() * quantity.valueOf();
    
    console.log("Today: " + today);
    console.log("Future date: " + futureDate);
    console.log("Days difference: " + daysDifference);
    console.log("Price calculation: " + price.valueOf() + " × " + quantity.valueOf() + " = " + total);
    
    // Display results in HTML
    document.getElementById("valueOfResult4").innerHTML = 
        "Today: " + today.toDateString() + "<br>" +
        "Future Date: " + futureDate.toDateString() + "<br>" +
        "Days Difference: " + daysDifference + " days<br>" +
        "Price: $" + price.valueOf() + " × " + quantity.valueOf() + " = $" + total.toFixed(2);
}