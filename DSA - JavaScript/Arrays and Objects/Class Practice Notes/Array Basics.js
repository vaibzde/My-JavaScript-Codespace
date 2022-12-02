

//Arrays -  a type of data structures

//DECLARATION

//1 ARRAY LITERALS
let name1 = [`aman`, `rahul`, `zen`]

// 2. using new keyword

let petName = new Array(5)// array of size n is created
let pen = new Array(2,2,2,3)// like [] same the 4 elem is created 


name1[5] = `hey`//editting and allotment
let people = name1[2] //acccesing

console.log(name1)
console.log(petName)
console.log(pen)

// in arrays with primitive types = objects can also be stored

console.log(typeof(pen))
//you will find Array is a type of object.. In JS everything is Object except primitives
//solution
//The instanceof operator returns true if an object is created by a given constructor:

const fruits = ["Banana", "Orange", "Apple"];

console.log(fruits instanceof Array)


//basic  Array method

console.log(pen.length)
//the length key word wil give the total no of elements in Arrays

//multidimention array

let arr2d = [[1,11,111],[2,22]]
//basically in Arrays.. in elements you can store arrays too.. And make a multidimention arrays
console.log(arr2d)

//accessing multidimentional arrays
console.log(arr2d[0][2])