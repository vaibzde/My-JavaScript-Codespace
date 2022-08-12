//Prototype

let arr = [1,2,3]
let obj = {}

// when we are typein arr. then why so many methods and properties are coming

//So prototyping is object that JS adds to everything

obj.__proto__
//above syntax will show the another object
//it is same as
Object.prototype
//which JS add to everything 
//simmilarly
arr.__proto__
//IS SAME AS
Array.prototype
//and if we do
Array.prototype.__proto__
//it is same as Object.Prototype

//similarly

function fun(){

}

fun.__proto__
//is same as
Function.prototype //remember captal F, 
//and the
Function.prototype.__proto__
//is same as Object.prototype


//And the
Object.prototype.__proto__

//is NULL

//.....................................................................................................

let temp = {
    name : `Vaibhev`,
    age : 23
  }
  
  //let see the object prototype og temp
  console.log(temp.__proto__)//here the o/p is Object.prototype
  //now let create the object with temp
  
  const temp1 = Object.create(temp)
  
  console.log(temp1)//here the o/p is empty
  console.log(temp1.__proto__)//here the o/p is temp object
  
  console.log(temp1.__proto__.__proto__)//here the o/p is Object.prototype
  
  