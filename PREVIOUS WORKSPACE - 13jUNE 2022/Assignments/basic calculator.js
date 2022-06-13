/*Simple Calculator: Implement the logic for a simple calculator
---------------------------------------------------------------------------------------
Simple Calculator: Implement the logic for a simple calculator which will perform basic operations - addition, subtraction, division, multiplication
function calculator(no1, no2, operation){
//Implement your logic here
}
calculator(4, 5, "+") // 9
calculator(3867, 9347, "+") // 13214
calculator(9, 3, "/") // 3
calculator(3, 9, "/") // 0.33  to roundOff fractional part use .toFixed(2) 
calculator(56, 89, "*") // 4984
calculator(-5, 5, "-") // -10
calculator(56, 89, "-") // -33 */

function calculator(num1, num2, operation){
   
    let result;

    if(operation==`+`){
        result = num1 + num2
    }
    
  else  if(operation==`-`){
        result = num1 - num2
    }
   else if(operation==`*`){
        result = num1 * num2
    }
    else if(operation==`/`){
        result = (num1/num2).toFixed(2)
    }
    else{
        result `error`
    }
    
    console.log(result)
}
calculator(4,3,`/`)