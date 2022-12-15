
//Math functions//
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

//Input values//
const operate = function(operator,a,b){
    switch(operator){
        case "+":
            return add (a,b);
        case "-":
            return subtract (a,b);
        case "*":
            return multiply(a,b);
        case '÷':
            if (b === 0){
                return 0
            } else {
                return divide(a,b);
            }
        default:
            return 0;
     }
}

console.log( operate("+",1,2));