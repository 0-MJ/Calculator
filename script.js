let a="";
let operator;
let b="";
let result=0;

// Define a function to perform mathematical operations//
const operate = function(a, operator, b){
    // Use a switch statement to choose the appropriate operation based on the operator argument//
    switch(operator){
      case "+":
        return add (a,b);
      case "-":
        return subtract (a,b);
      case "*":
        return multiply(a,b);
      case '/':
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
  
  
// define the currentValue variable
let currentValue = 0; 

// Get a reference to the display element//
let display = document.getElementById('display')


// Add event listeners to the operation buttons//
const operationButtons = document.querySelectorAll(".operators");
operationButtons.forEach(function(button){
    button.addEventListener('click',function(){
         // Append the operator character to the display element//
        display.append(button.textContent);
        operator=button.textContent;
        console.log(operator);
        })
})
// Add event listeners to the number buttons//
const numberButtons = document.querySelectorAll(".operands");
numberButtons.forEach(function(button){
    button.addEventListener('click',function(){
         // Append the operator character to the display element//
        display.append(button.textContent);
        if(operator){
        b += [button.textContent];
        }else{
        a += [button.textContent];
        }
        console.log("a="+a);
        console.log(typeof a);
        console.log("b="+b);
        
        })
        
})


// Add an event listener to the clear button//
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click',function(){
     // Reset the display element to 0//
     display.textContent=0;
     // Update the currentValue variable
     currentValue = display.textContent;
     console.log(currentValue);
})
// Add an event listener to the delete button//
const deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click',function(){
    // Check if the display element is empty//
    if (display.textContent.length === 0) {
        return; 
      }else{
         // Remove the last character from the display element//
         display.textContent=display.textContent.slice(0,-1);
           // Update the currentValue variable
           currentValue = display.textContent;
         console.log(currentValue);
        }
 });

const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click',function(){
  display.append(equals.textContent);
  currentValue = display.textContent;
  console.log (currentValue);
    
})

 //Putting the array of characters into different variables for use in the operate function//
currentValue