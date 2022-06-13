/* Requirements: "Create a program where you will be given a list of names of the people along with their designation,
based on the name you type in from the input field of the given html file, the relevant designation of
the person will be displayed.
Following are the designation of the people:
Alex is a Developer
John is an Artist
Strek is a Singer
Smith is an Actor Please submit you code as a repository on Google doc link." */
debugger
var inputName = "Alex"

var designation = ''
switch(true){//in Switch bracket, you have to mention in "if condtition statisfies this, then implement that case"
    case (inputName === "Alex") : designation = "Developer"
    break;
    case (inputName === "John") : designation = "Artist"
    break;
    case (inputName === "Strek") : designation = "Singer"
    break;
    case (inputName === "Smith") : designation = "Actor"
    break;
    default : designation = "<No Designation mentioned>"
}

//console.log('${inputName} is a ${designation}')
console.log(inputName +  " is a " + designation)