// While loop function that will be called by the button click
function Call_Loop() {
    var text = "";
    var i = 0;
    
    // While loop that runs while i is less than 10
    while (i < 10) {
        text += "The number is " + i + "<br>";
        i++;
    }
    
    // Display the result in the paragraph element
    document.getElementById("Loop").innerHTML = text;
}

// For loop function that displays a list of instruments - Updated to use let keyword
function for_loop() {
    let Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet"]; // Using let instead of var
    let text = ""; // Using let for block-scoped variable
    
    // For loop using let for the iterator variable
    for (let i = 0; i < Instruments.length; i++) {
        text += Instruments[i] + "<br>";
    }
    
    // Add demonstration of let keyword usage
    text += "<br><strong>Let keyword demonstration:</strong><br>";
    text += demonstrateLet();
    
    // Display the list of instruments and let examples in the paragraph element
    document.getElementById("list_of_Instruments").innerHTML = text;
}

// Create an object using the const keyword with properties and values
const Car = {
    make: "Toyota",
    model: "Camry",
    year: 2023,
    color: "Blue",
    price: 28000
};

// Function to display object properties
function constant_function() {
    // Change a property's value
    Car.color = "Red";
    
    // Add a new property with a value
    Car.mileage = "15,000 miles";
    
    // Display string that includes the changed property value and added property value
    document.getElementById("Constant").innerHTML = "The car is a " + Car.year + " " + 
        Car.make + " " + Car.model + " in " + Car.color + " color (changed from Blue), " +
        "priced at $" + Car.price + ", with " + Car.mileage + " (newly added property).";
}

// Demonstrate the use of let keyword
function demonstrateLet() {
    let message = ""; // Using let keyword for block-scoped variable
    
    // Example 1: let in a for loop
    for (let i = 0; i < 5; i++) {
        message += "Iteration " + i + " using let keyword<br>";
    }
    
    // Example 2: let with block scope
    if (true) {
        let blockScopedVar = "This variable is block-scoped with let";
        message += blockScopedVar + "<br>";
    }
    
    // Example 3: let can be reassigned
    let reassignableVar = "Initial value";
    reassignableVar = "Reassigned value using let";
    message += "Let variable reassigned: " + reassignableVar + "<br>";
    
    return message;
}

// Create an object using the let keyword with properties and a method
let Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "New York",
    occupation: "Software Developer",
    
    // Method within the object
    getFullInfo: function() {
        return this.firstName + " " + this.lastName + " is " + this.age + 
               " years old, lives in " + this.city + ", and works as a " + this.occupation + ".";
    },
    
    // Another method to demonstrate object functionality
    greet: function() {
        return "Hello, my name is " + this.firstName + " " + this.lastName + "!";
    }
};

// Function to display the object information
function displayPersonInfo() {
    let displayText = "";
    displayText += "<strong>Object created with let keyword:</strong><br>";
    displayText += "First Name: " + Person.firstName + "<br>";
    displayText += "Last Name: " + Person.lastName + "<br>";
    displayText += "Age: " + Person.age + "<br>";
    displayText += "City: " + Person.city + "<br>";
    displayText += "Occupation: " + Person.occupation + "<br><br>";
    displayText += "<strong>Using object methods:</strong><br>";
    displayText += Person.greet() + "<br>";
    displayText += Person.getFullInfo();
    
    document.getElementById("ObjectDisplay").innerHTML = displayText;
}
