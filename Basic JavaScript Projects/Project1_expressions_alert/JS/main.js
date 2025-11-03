
//window.alert()Method
window.alert("Hello Universe!");

//document.write()Method
document.write("Hello World!");

//Variable 
var X = " Good Morning!";
document.write(X);
var Y = " It's a beautiful day!";
document.write(Y);

//Escaping Characters, String Assignments
const message = " My Message to you all, \" Have a fantasctic day! \"";
document.write(message);
var Z = " Welcome to the JavaScript Exercises Page! " + " -Janet Flachmeier ";
document.write(Z);

// Concatenating Assignment  multiple variable in one statement
var FirstName = "Janet", LastName = "Flachmeier", Age = 30, greeting = "Hello", Occupation = " Web Developer, ";
document.write ( Age );
document.write( Occupation );

// Expression: adding two numbers
var total = 5 + 5;
document.write(" I feel ecstatic today and I rate my day: " + total);

//function with a return statement
function My_First_Function() {          //Defining the function and naming it
    var str = "This is the button text!"; //Defining a variable and giving it a string value
    document.getElementById("Button_Text").innerHTML = str; //Putting the value of the variable 
}
                                                             //into the HTML element with "Button_Text" id
