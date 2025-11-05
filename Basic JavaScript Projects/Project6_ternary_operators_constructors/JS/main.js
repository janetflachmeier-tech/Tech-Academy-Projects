// ===== TERNARY OPERATOR FUNCTION =====
// Function that utilizes ternary operation with browser input
function checkVotingAge() {
    // Get user input from the browser
    var age = document.getElementById("age").value;
    
    // Convert string input to number for comparison
    age = parseInt(age);
    
    // Ternary operator: condition ? value_if_true : value_if_false
    var message = (age >= 18) ? "You can vote!" : "You are not old enough to vote";
    
    // Display result in HTML element
    document.getElementById("ageResult").innerHTML = message;
}

// ===== CONSTRUCTOR FUNCTION =====
// Constructor function using "new" and "this" keywords
function Vehicle(make, model, year, color) {
    // Using "this" keyword to assign properties to the object
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}

// Creating objects using "new" keyword with constructor function
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// ===== FUNCTION TO DISPLAY CONSTRUCTOR RESULTS =====
// Function to display the results of constructor function within HTML elements
function MyFunction() {
    // Display Erik's vehicle information
    document.getElementById("keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.vehicle_color + "-colored " + Erik.vehicle_model +
    " manufactured in " + Erik.vehicle_year;
    
    // Display Jack's vehicle information
    document.getElementById("New_and_This").innerHTML =
    "Jack drives a " + Jack.vehicle_color + " " + Jack.vehicle_make + " " + Jack.vehicle_model +
    " manufactured in " + Jack.vehicle_year;
}

// ===== NESTED FUNCTION =====
// Outer function containing nested functions
function count_Function() {
    // Call the nested Count function and display result
    document.getElementById("Counting").innerHTML = Count();
    
    // Nested function inside count_Function
    function Count() {
        var Starting_point = 9;
        
        // Function nested inside Count function
        function Plus_one() {
            Starting_point += 1;
        }
        
        // Call the nested function
        Plus_one();
        
        // Return the incremented value
        return Starting_point;
    }
}
