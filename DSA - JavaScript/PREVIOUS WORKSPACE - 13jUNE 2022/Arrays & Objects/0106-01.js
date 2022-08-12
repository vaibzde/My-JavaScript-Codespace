//Pass by value
function square(x){
    x= x*x 
    return x
}
 let y = 10;
let result = square(y); //when you call y, 2 possiblities ,1)the copy of y can be passed or 2} the y can be passed itself
 console.log(result);
 console.log(y);//10

 //.....

 function add(x,y){
     let rand = Math.random() *10;
    return x + y + rand;
 }
 console.log(add(2,3))//as due to random u can not predict the output, so impure

 var globalVar = 1;
 function add(x,y){
     return x+y+globalVar

 }
 console.log(add(2,3))