setTimeout(function(){
    console.log("Hey")
}, 1000)

function first(){
    second()
}
function second(){
    third()
}
function third(){
  //  `Any other`
}

//here if this goes into like 100th function,
//so our setTimeout is done in 1 second BigUint64Array, it is not getting chance to come in call stack, as other sync things are taking so long