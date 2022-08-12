var num  = -85

switch(true){
    case (num > 0):
        texty = "Positive"
        break;
    case (num === 0):
        texty = "Zero"
        break;
    case (num < 0):
        texty = "Negative"
        break;
    default:
        texty = "Not a number"
}
console.log(texty)