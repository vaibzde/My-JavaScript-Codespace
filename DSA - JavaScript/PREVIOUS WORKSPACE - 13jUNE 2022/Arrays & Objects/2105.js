//https://github.com/Prakshalshah78/DSA_Relevel
//prakshal Sir, github

//Sorting of arrays
let arr = [5,1,0,2,4,3,6,5]

console.log(arr.sort())//by default sort in assending order
//console.log(arr.sort(function (a,b){
//    console.lo
//})//applying condition for desending order
//when a-b >0 then swap
//     a-b <=0 need not to swap
console.log(arr.sort((a,b)=>(b>a)))// another wayapplying condition for desending order



//slice
let arr1 = [`elephant` , `crow` ,`peakock`,`bison`, `cheeta`]
console.log(arr1.slice(1,3))

let str = ["elephant", "apeackock"]
console.log(str[1].slice(2)) //slice works with sting but sort dont work with sort
let st2 = [`elephant`, `dog`]
console.log(st2.reverse())

//-------------------------------------------------------------------
//destructuring of object
let person = {
    "name" : 'Naina',
    "age" : 22,
    "collage" : 'IIT'
}
person.test = true//will age test in object person
let {age} = person;//destucturing of object
console.log(age)
//above is better practice
let {name:customName}= person//destruction the object with another custom name
console.log(customName)
/*//name: customName => this will indicate that you
will fetch your name property with customName in
further code*/
let {name:customName1, firstName = "Pyari"}= person 
console.log(firstName, customName) 
/*firstname="Pyari" - this will
indicate that although you did
not have firstname in your raw
object but we need to use it this
is my default value.*/
console.log(person)//here firstNAme will not be added into object
person.sibbling = {sis: [`Neha`, `Palak`, `Ruchi`],
bro: [`rahul`, `Rishabh`] }//added sibbling to person
let {sibbling:friends,
    bro: Bhai,
    sis: Behn
} = person
console.log(person)
console.log(firstName, Behn)

//restOfDetails
let {age:yourAge,...restOfDetails} = person
console.log(yourAge,restOfDetails)

var arr3 = [1,3,2,2,5]
//op = [1,5,2,3,2]
let opt = arr3.sort((a,b)=>(a-b))
let opt2 = opt.sort((a,b,c)=>((opt.length-b)>(a,c)))

console.log(opt2) 