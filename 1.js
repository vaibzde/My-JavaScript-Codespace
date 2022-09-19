//coding in javascript

//declaring variable, it can be declared with 3 types

var name = `Vaibhav`
let age = 23;
const gender = age;

//a string is always comes under "", or ``, or ''

//there are diffrent types of data types in javascript..
//Boolean type.
//Null type.
//Undefined type.
//Number type.
//BigInt type.
//String type.
//Symbol type.

//functions in JAvascript are key thins, this is to do some particualr task..

function func_name(arguments){
    //code
}

//to print some thing in javascript
//we use
console.log("Hello Web Development")

//conditional statements are there in javascripts

//ex

if(age>18){
    console.log("One can vote")
}
else{
    console.log("Not eligible for vote")
}

//there are nested if else are also there..

//Arrays are datatypes used to collect the group of data

//arrays can be declared in 2 ways

let newArr = [1,2,3,4,5,6]
let arr2 = new Array(11,22,33,"data")

// the indexing of array starts from 0 and end with n-1, if the length of array is n

//to find the length of array
//we use
let n = arr2.length

//in javascript we can do the looping
//for example

for(let i=0; i<newArr.length; i++){
    console.log(newArr[i])// accessing ith element of array
    newArr[i]++ //doing the incremental operation here
}

//there are many types of loop
//for loop
//while loop
//do while loop

//we can also create the object in Javascript
let obj = {
    //key: property
    nameOfPerson: "Vaibhav"
    age: 23
}

//and there are many thing to do in javascript endlessly
