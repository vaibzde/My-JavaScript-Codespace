/* object in js has property and method
basically  key and values..

primitive datattype and non primitive datatype
non prim dt is objects and arrays..

in object.. key is basically the string but it can be any primitive datatype
and value can be anything primitive or nonprimitive...
combination of keys and value will form objject
*/
//eg
var obj = {
    key1 :  `value1`,//need comma btw diff keys
    key2 : `value2`
}
console.log(obj)
//object will not store the data in contiguous manner, like arrays
//key value pairs of the object can be stored in random place
//constructor is a special kind of function, which will be called when you try to create an object using `new` keyword
function person(name, age, sibling, isStudent){
this.name = name;
this.age = age; //this.key_name = valuees-var //blueprint of creating a object like this
this.sibling = sibling;
this.isStudent = isStudent
//constructor
}//constructor

//here we are declaring the object (person1) with this new keyword
var person1 = new person(`dishi`, 24, [`1mehek`], true)
console.log(person1)
console.log(typeof(person1))

//with dot(.) you can use access the value of key also..
//like object_name.key_name
console.log(person1.age)
console.log(obj.key2)

//......................................

//JSON Object JavaScript Object Notation
/*it is more of communication
    In json, it is like object bvut the key is in ""
    double coutation
    json is to communicate, normal object is for personal use...
    in values you can have anything
    you can deserialize and serialize
`   deserialize from anyother form to object
    serialize is vice verso of above


        diff btw mutable and immutable
    mutable                         immutable
    type of var that can be     value can not be changed
    changed                     
    eg- arrays and object          



////////////////////////////////
//Methods in Object,(same in Json)

    Object.freeze(object_name)
    //once object will be freezed it values can not be changed
    and other property can not be added
    Object.isFrozen(obj_name) //to check if frozen or not

    delete object_name.key_name
    to delete the key in the object

    //below object is sealed
    sealed means, you can not delete and can not add but can modify
Object.seal(Object_Name)
Object.isSealed(Object_Name) // to check if object is sealed or not

//here Extensions, you can delete, modify.. but not able to add
Object.preventExtensions(Object_Name)
isExtensions(Object_Name)
*/


//MOST IMP OF TODAY SESSION
/*------------------------------------
mAP mETHOD*/
const arr = [15,1,2,6]
function double(x){
return x*2;
}
console.log(arr)
const output = arr.map(double)
console.log(output)
//arrow function, shorcutting map function
const add2 = arr.map((x)=>x+2)
console.log(add2)
//using Filter function
const even = arr.filter((x) => x%2==0)
console.log(even)
//using filter with Arrow function
const arr1 = [5,1,2,6]
let grt2 = arr1.filter((x)=> x>2)
console.log(grt2)

//ex
var input = [ `pencil`, 'kite', 'code' ];
function addS(Str){
   let StrF = Str + `s`
   return StrF
}
let opt = input.map(addS)
console.log(input)
console.log(opt)
//let can not be redeclare.. just got remembered

//Filter Function
//filter will accept funtion which will filter out existing values and give new value
// In a way returing a array, by filtering it by the givven fxn

//arr.filter(function name)



//reducer Method
//
/*I/same using reduce
const output = arr. reduce (function (acc, curr){
    /pass function which will do our job
    //this function will be iterated to each and
    every element of an array
    // acc accumulator it will add or accumulate
    the reult after each iteration, just as sum
    1l curr current- represents the value in each
    iteration just as arr[i]1
    const output arr.reduce(function (acc, curr){
acc acc+Curr;
return acc;
console. log (output)
*/

const arr5 = [5,1,2,6,8,9]
let avg = arr5.reduce(function(acc,curr){
    acc = acc + (curr/arr5.length)
    return acc
},0)
console.log(avg)
//use of forEach
arr5.forEach(elem=>(console.log(elem)))
arr5.map(elem=>(console.log(elem)))