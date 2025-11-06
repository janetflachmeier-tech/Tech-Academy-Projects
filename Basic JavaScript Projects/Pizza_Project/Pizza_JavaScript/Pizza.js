
/*
Pizza Menu Application - Main JavaScript File
This file contains the core functionality for a pizza ordering system
that calculates prices based on size selection and toppings.
*/

// Main function called when "Place Order" button is clicked
function getReceipt() {
    // Initialize receipt text with header - this will build up as we add items
    var text1 = "<h3>You Ordered:</h3>";    
    
    // Initialize running total and size total variables
    var runningTotal = 0;
    var sizeTotal = 0;
    
    // Get all radio buttons with class "size" to find selected pizza size
    var sizeArray = document.getElementsByClassName("size");
    
    // Loop through all size options to find which one is selected
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            // Store the selected size value and add it to receipt text
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    
    // Determine price based on selected pizza size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }

    // Set running total to the base pizza price
    runningTotal = sizeTotal;
    
    // Console logging for debugging purposes
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);        
    console.log("subtotal: $" + runningTotal + ".00");
    
    // Pass the current total and receipt text to the topping function
    getTopping(runningTotal, text1);
}

// Function to handle topping selection and calculate additional costs
function getTopping(runningTotal, text1) {
    // Initialize topping cost and array to store selected toppings
    var toppingTotal = 0;
    var selectedTopping = [];
    
    // Get all checkboxes with class "toppings" (includes both meats and vegetables)
    var toppingArray = document.getElementsByClassName("toppings");
    
    // Loop through all topping checkboxes to find selected ones
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            // Add selected topping to array and receipt text
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    
    // Calculate topping cost - first topping is free, each additional costs $1
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1); // Subtract 1 because first topping is free
    }
    else {
        toppingTotal = 0; // No charge if 1 or 0 toppings selected
    }
    
    // Add topping cost to running total
    runningTotal = (runningTotal + toppingTotal);
    
    // Console logging for debugging and verification
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: $" + runningTotal + ".00");
    
    // Update the DOM elements to display the order summary and total price
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
};



