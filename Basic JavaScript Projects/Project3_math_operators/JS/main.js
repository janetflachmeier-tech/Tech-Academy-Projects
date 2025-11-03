//Addition with JavaScript 
function addition_Function() {
  var addition = 5 + 3;
  document.getElementById("Addition").innerHTML = "5 + 3 = " + addition;
}
//Subtraction with JavaScript
function subtraction_Function() {
  var subtraction = 10 - 3;
  document.getElementById("Subtraction").innerHTML = "10 - 3 = " + subtraction;
}
//Multiplication with JavaScript
function multiplication_Function() {
  var multiplication = 4 * 2;
  document.getElementById("Multiplication").innerHTML = "4 x 2 = " + multiplication;
}
//Division with JavaScript
function division_Function() {
  var division = 16 / 2;
  document.getElementById("Division").innerHTML = "16 / 2 = " + division;
}
//Multiple Operations with JavaScript
function more_Math() {
  var more_Math = (1 + 2) * 10 / 2 - 5;
  document.getElementById("MoreMath").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + more_Math;
}
//Multiple Mathematical Operators
function modulus_Operator() {
  var modulus_Operator = 25 % 6;
  document.getElementById("Modulus").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus_Operator;
}
//Unary Negation Operator
function negation_Operator() {
  var x = 10;
  document.getElementById("Negation").innerHTML = -x;
}
//Increment Operator
function increment_Operator() {
  var X = 5;
  X++;
  document.getElementById("Increment").innerHTML = "5 incremented by 1 is: " + X;
}
function decrement_Operator() {
  var Y = 5;
  Y--;
  document.getElementById("Decrement").innerHTML = "5 decremented by 1 is: " + Y;
}

function random_Number() {
  var result = Math.random();
  document.getElementById("Random").innerHTML = "Random number between 0 and 1: " + result;
}

function round_Number() {
  var result = Math.round(4.6);
  document.getElementById("Round").innerHTML = "4.6 rounded is: " + result;
}

function ceiling_Number() {
  var result = Math.ceil(4.2);
  document.getElementById("Ceiling").innerHTML = "4.2 rounded up is: " + result;
}
