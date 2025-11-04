// ===== GLOBAL VARIABLE =====
// This variable is declared outside any function, making it global
var globalMessage = "This is a global variable - accessible from anywhere in the code";

// ===== FUNCTION WITH LOCAL VARIABLE =====
function demonstrateScope() {
    // Local variable - only accessible within this function
    var localMessage = "This is a local variable - only accessible within this function";
    
    console.log("Global variable accessed from function: " + globalMessage);
    console.log("Local variable: " + localMessage);
    
    // Display both variables in the HTML
    document.getElementById("scopeDemo").innerHTML = 
        "Global: " + globalMessage + "<br>Local: " + localMessage;
}

// ===== FUNCTION WITH INTENTIONAL ERROR FOR DEBUGGING =====
function buggyFunction() {
    console.log("Starting buggyFunction...");
    
    // Intentional error: trying to access a variable that doesn't exist
    console.log("Attempting to access undefined variable...");
    console.log("Undefined variable value: " + undefinedVariable); // This will cause an error
    
    // This line won't execute due to the error above
    console.log("This message won't appear due to the error");
}

// ===== FUNCTION TO TEST ERROR HANDLING =====
function testErrorHandling() {
    console.log("=== Testing Error Handling ===");
    
    try {
        buggyFunction();
    } catch (error) {
        console.log("Error caught: " + error.message);
        console.log("Error type: " + error.name);
        
        // Display error information in HTML
        document.getElementById("errorDemo").innerHTML = 
            "Error caught: " + error.message + "<br>Check console for details!";
    }
}

// ===== ADDITIONAL DEBUGGING EXAMPLES =====
function moreDebuggingExamples() {
    console.log("=== Additional Debugging Examples ===");
    
    // Different types of console logging for debugging
    console.log("Regular log message");
    console.warn("This is a warning message");
    console.error("This is an error message");
    console.info("This is an info message");
    
    // Logging variable values for debugging
    var testNumber = 42;
    var testString = "Hello World";
    var testArray = [1, 2, 3, 4, 5];
    
    console.log("Test number:", testNumber);
    console.log("Test string:", testString);
    console.log("Test array:", testArray);
    
    // Display in HTML
    document.getElementById("debugDemo").innerHTML = 
        "Check the console to see various debugging messages!";
}

// Test global variable accessibility
console.log("Global variable accessible at file level: " + globalMessage);

// ===== TIME_FUNCTION() AS OUTLINED IN COURSE SLIDES =====
// Time function that displays current time information
function Time_function() {
    // Get current date and time
    var Time = new Date().getHours();
    var timeMessage;
    
    console.log("Time_function() called - Current hour: " + Time);
    
    // If statement to determine time-based message
    if (Time < 12) {
        timeMessage = "Good Morning!";
    } else if (Time >= 12 && Time < 18) {
        timeMessage = "Good Afternoon!";
    } else {
        timeMessage = "Good Evening!";
    }
    
    // Display the time message
    document.getElementById("Time_of_day").innerHTML = timeMessage;
    
    // Log to console for debugging
    console.log("Time_function() result: " + timeMessage);
}

// ===== TIME-BASED GREETING FUNCTION WITH IF STATEMENT =====
// Function that uses new Date().getHours() method with if statement
function displayTimeGreeting() {
    // Get current hour using Date().getHours() method
    var currentHour = new Date().getHours();
    var greeting;
    
    console.log("Current hour is: " + currentHour);
    
    // If statement to determine greeting based on time of day
    if (currentHour < 12) {
        greeting = "Good Morning! It's " + currentHour + ":00. Time to start your day!";
    } else if (currentHour < 17) {
        greeting = "Good Afternoon! It's " + currentHour + ":00. Hope you're having a great day!";
    } else {
        greeting = "Good Evening! It's " + currentHour + ":00. Time to relax!";
    }
    
    // Use document.getElementById() method to reference the HTML element
    document.getElementById("timeGreeting").innerHTML = greeting;
    
    // Log the greeting to console for debugging
    console.log("Greeting displayed: " + greeting);
}

// ===== AGE VERIFICATION FUNCTION WITH IF/ELSE STATEMENT =====
// Function that includes if statement and else statement
function checkAge() {
    // Use document.getElementById() to get the input value
    var userAge = document.getElementById("ageInput").value;
    var resultMessage;
    
    console.log("User entered age: " + userAge);
    
    // Convert string input to number for comparison
    userAge = parseInt(userAge);
    
    // If/else statement to check voting eligibility
    if (userAge >= 18) {
        resultMessage = "Congratulations! You are " + userAge + " years old and eligible to vote!";
        console.log("User is eligible to vote");
    } else {
        resultMessage = "Sorry, you are " + userAge + " years old. You must be 18 or older to vote.";
        console.log("User is not eligible to vote");
    }
    
    // Use document.getElementById() to display the result
    document.getElementById("ageResult").innerHTML = resultMessage;
    
    // Log the result to console for debugging
    console.log("Result message: " + resultMessage);
}

// ===== ELSE IF ASSIGNMENT - AGE CATEGORY FUNCTION =====
// Function that demonstrates if, else if, and else statements
function checkAgeCategory() {
    // Use document.getElementById() to get the input value
    var userAge = document.getElementById("categoryInput").value;
    var categoryMessage;
    
    console.log("User entered age for category check: " + userAge);
    
    // Convert string input to number for comparison
    userAge = parseInt(userAge);
    
    // If/else if/else statement to categorize age groups
    if (userAge < 13) {
        categoryMessage = "You are " + userAge + " years old. You are a child!";
        console.log("Age category: Child");
    } else if (userAge >= 13 && userAge < 20) {
        categoryMessage = "You are " + userAge + " years old. You are a teenager!";
        console.log("Age category: Teenager");
    } else if (userAge >= 20 && userAge < 40) {
        categoryMessage = "You are " + userAge + " years old. You are a young adult!";
        console.log("Age category: Young Adult");
    } else if (userAge >= 40 && userAge < 65) {
        categoryMessage = "You are " + userAge + " years old. You are a middle-aged adult!";
        console.log("Age category: Middle-aged Adult");
    } else {
        categoryMessage = "You are " + userAge + " years old. You are a senior citizen!";
        console.log("Age category: Senior Citizen");
    }
    
    // Use document.getElementById() to display the result
    document.getElementById("categoryResult").innerHTML = categoryMessage;
    
    // Log the result to console for debugging
    console.log("Category message: " + categoryMessage);
}
