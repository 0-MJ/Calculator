let a="";
let operator = "";
let b="";
let result=0;

// Define a function to perform mathematical operations//
const operate = function(a, operator, b){
   // Convert the arguments to integers
   a = parseInt(a);
   b = parseInt(b);
 
   // Check if the arguments are valid numbers
   if (isNaN(a) || isNaN(b)) {
     // Return a default value or throw an error
     return 0;
   }
    // Use a switch statement to choose the appropriate operation based on the operator argument//
    switch(operator){
      case "+":
        return add (a,b);
      case "-":
        return subtract (a,b);
      case "×":
        return multiply(a,b);
      case '÷':
        // Check if b is 0//
        if (b === 0){
          // Return 0 if b is 0//
          return 0
        } else {
          // Return the result of dividing a by b if b is not 0//
          return divide(a,b);
        }
      default:
        // Return 0 if the operator is not recognized//
        return 0;
    }
  }
  
  // Define functions to perform basic mathematical operations//
  //Add//
  function add (a,b) {
    return a + b;
  };
  
  //Subtract//
  function subtract (a,b) {
    return a - b;
  };
  
  //Multiply//
  function multiply (a,b){
    return a*b
  }
  
  //Divide//
  function divide (a,b){
    return a/b
  }
  

// Get a reference to the display element//
let display = document.getElementById('display')


// Add event listeners to the operation buttons//
const operationButtons = document.querySelectorAll(".operators");
operationButtons.forEach(function(button){
    button.addEventListener('click',function(){
     // Check if a, operator, and b have values
     if (a  && operator  && b ) {
      // Calculate the result
      result = operate(a, operator, b);
      // Update the display element with the result
      display.textContent = result;
      // Update the a variable with the result
      a = result;
      // Append the operator character to the display element
      display.append(button.textContent);
      // Update the operator variable
      operator = button.textContent;
      b = "";
    } else {
      // Append the operator character to the display element
      display.append(button.textContent);
      // Update the operator variable
      operator = button.textContent;
    }
    console.log(`a:${a}, operator:${operator}, b:${b}`);
  });
});
// Add event listeners to the number buttons//
const numberButtons = document.querySelectorAll(".operands");
numberButtons.forEach(function(button){
  button.addEventListener('click',function(){
         // Append the operator character to the display element//
         display.append(button.textContent);
          // Check if the o variable is empty
          if (operator === "") {
            // Append the number character to the a variable
            a += button.textContent;
          } else {
            // Append the number character to the b variable
            b += button.textContent;
          }
          console.log(`a:${a},operator:${operator},b:${b}`);
  }) 
});     

// Add an event listener to the clear button//
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click',function(){
     // Reset the display element to 0//
     display.textContent=null;
    // Reset the a, o, and b variables to empty strings
       a = "";
       operator = "";
       b = "";
       console.log(`a:${a},operator:${operator},b:${b}`);
})
// Add an event listener to the delete button//
const deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click',function(){
    // Check if the display element is empty//
    if (display.textContent.length === 0) {
      return; 
    } else {
      // Remove the last character from the display element
       display.textContent = display.textContent.slice(0, -1);
      // Remove the last character from the appropriate variable (b, operator, or a)
    if (b !== "") {
      b = b.slice(0, -1);
    } else if (operator !== "") {
      operator = operator.slice(0, -1);
    } else if (a !== "") {
      a = a.slice(0, -1);
    }
  }
   console.log(`a:${a},operator:${operator},b:${b}`);
  });
const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click',function(){
  result = operate(a,operator,b);
 display.textContent=result;
 a=result;
 b="";
 operator="";
  console.log(result);
});
