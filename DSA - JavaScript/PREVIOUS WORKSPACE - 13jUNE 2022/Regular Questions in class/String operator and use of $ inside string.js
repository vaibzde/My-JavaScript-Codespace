/*One special feature of the template literal feature is the ability to include expressions and variables within a string. Instead of having to use concatenation, 
we can use the ${} syntax to insert a variable.*/

var strin1 = "String1"
var strin2 = 'String2'
var strin3 = `String3`

console.log(strin1 + typeof(strin1))
console.log(strin2 + typeof(strin2))
console.log(strin3 + typeof(strin3))

console.log(`hello ${strin3}, and then ${strin1} and ${strin2}`)
//REMEMBER, whenever you are using ${} inside string.. to decrare sting.. use `` (backtick), instead of '' or "".. Only then ${} will work