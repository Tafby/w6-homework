//Function called "signIn", causes an alert to pop up with text "Thanks for signing in". Should be triggered by clicking on the button with id of "sign-in".


    
function signIn(){
  var userInput = alert("Thanks for signing in!");
  console.log(userInput);}

function signUp(){
  var userInput = prompt("Please enter email address here");
  console.log(userInput);
  document.getElementById("output-here").innerHTML = "Thanks for signing up, "+ userInput;}




//Function called "signUp", causes a prompt to appear and ask for user's email address, then prints to the "output-here" paragraph "Thanks for signing up, " and the entered email address. Should be triggered by clicking on the button with id of "sign-up".

//add a third button with my own styling for extra credit