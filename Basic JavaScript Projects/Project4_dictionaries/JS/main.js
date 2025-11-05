// Creating a dictionary (object) and using the delete operator
function testDuplicateKeys() {
    // Let's create a dictionary with duplicate keys and see what happens
    var carDictionary = {
        "brand": "Toyota",
        "model": "Camry",
        "year": 2020,
        "brand": "Honda",  // Duplicate key - this will overwrite the first "brand"
        "color": "Blue",
        "model": "Civic"   // Duplicate key - this will overwrite the first "model"
    };
    
    // Display the dictionary contents BEFORE deletion
    var result = "Dictionary contents BEFORE deletion:<br>";
    result += "Brand: " + carDictionary.brand + "<br>";
    result += "Model: " + carDictionary.model + "<br>";
    result += "Year: " + carDictionary.year + "<br>";
    result += "Color: " + carDictionary.color + "<br>";
    
    // Use the delete operator to remove a value from the dictionary
    delete carDictionary.year;
    
    // Display the dictionary contents AFTER deletion
    result += "<br>Dictionary contents AFTER deleting 'year':<br>";
    result += "Brand: " + carDictionary.brand + "<br>";
    result += "Model: " + carDictionary.model + "<br>";
    result += "Year: " + carDictionary.year + " (undefined - deleted!)<br>";
    result += "Color: " + carDictionary.color + "<br>";
    result += "<br>The 'year' property has been successfully deleted using the delete operator!";
    
    document.getElementById("Dictionary").innerHTML = result;
}
