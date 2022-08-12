console.log('Hello World!');
function anyFx(n){
    return n*n
}

 //Creating an Array using an array literal
var anArray = [`hi,`, `this is`, `another array`, anyFx(6)]
console.log(anArray)

//Using the JavaScript Keyword new to create array
var startingArrays = new Array(`hey,`, `how`, `are`, `you`, 45, 48989.8989)
console.log(startingArrays)

//using length syntax to find the length of array
l1 = anArray.length
console.log(l1)

//multidimention Array, basically storing arrays in arrays
var multiArray = [
    [1, `vaibhav`, `Any Good Work`],
    [`this is 2nd dimention`, 34, 3892, `can have different no o0f elements from its fellow dimentions`],
    [108, `Om Namah Shivay`]
]
console.log(multiArray)


//length of multidimention array is the number of dimentions in it
let lmulti = multiArray.length
console.log(`no of dimention is ${lmulti}`)