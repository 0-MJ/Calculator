// Get a reference to the display element//
let display = document.getElementById('display')

// Add event listeners to the operation buttons//
const operationButtons = document.querySelectorAll(".operationButtons");
operationButtons.forEach(function(button){
    button.addEventListener('click',function(){
         // Append the operator character to the display element//
        display.append(button.textContent)
        console.log(button.textContent)
        
    })
})
// Add an event listener to the clear button//
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click',function(){
     // Reset the display element to 0//
   display.textContent=0;
    console.log(display.textContent)
})
// Add an event listener to the delete button//
const deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click',function(){
    // Check if the display element is empty//
    if (display.textContent.length === 0) {
        return; 
      }else{
        console.log(display.textContent);
         // Remove the last character from the display element//
         display.textContent=display.textContent.slice(0,-1);
        }
 });







 // Define a function to perform mathematical operations//
const operate = function(operator,a,b){
        // Use a switch statement to choose the appropriate operation based on the operator argument//
    switch(operator){
        case "+":
            return add (a,b);
        case "-":
            return subtract (a,b);
        case "*":
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

console.log( operate("+",1,2));


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












