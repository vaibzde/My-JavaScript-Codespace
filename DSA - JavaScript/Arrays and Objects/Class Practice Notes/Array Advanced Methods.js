//iteration

//usinf forEach
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value + "<br>";
}
 //forEach calls a function with specific parameters it takes  - value , - index, - array

// for..of

const arr1 = [`Harry`, `Uno`, `Francisco`, `Cisco`]

for(elem of arr1){
    console.log(elem)
}
//for(index of array)

//Higher Order Functions of Arrays

//1. map function
//it forms a new array by calling a function in its argument, by using each elements of array.
//the callback function can accept the item, array, indexes

var input = [22,33,14,24,9,8,77]
//1.1
let opt = input.map(n => n*2)
console.log(opt)
//1.2
function sub5(n){
    if(n%2==0){
        return n-5
    }
    else{
        return n;
    }
}
let opt1 = input.map(index => (sub5(index)))
console.log(opt1)
// const outputArray = inputArray.map(elem => f\(elem)) 

//1.3
//using mapfunction without argument of callback function

let arr2 = input.map(sub5)
console.log(input, arr2)


//learning arrow function
//arrow function allows to write shorter function syntax

let func1 = (a,b) => {
    if(a>b){
        return `${a} is greater`
    }
    else{
        return `${b} is greater`
    }
}

console.log(func1(6,87))

//another way of using arow in which.. it directly returns

let myFunc = (a) => 25+a
console.log(myFunc(4))



//2. 