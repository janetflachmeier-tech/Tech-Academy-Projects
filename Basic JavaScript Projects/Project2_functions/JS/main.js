//Function with two variables + getElementById
function My_First_Function() {
  var greeting = "Hello Universe!";
  var message = "This is the button text!";
  document.getElementById("Button_Text").innerHTML = greeting + " " + message;
}
//Using the += operator to concatenate a string
function concatenateMessage() {
  let message = "Hello";
  message += " there!";
  document.getElementById("Message_Output").innerHTML = message;
}

