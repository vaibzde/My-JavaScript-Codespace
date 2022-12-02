//async example

function show(i){
    console.log(i)
}

for(let i=10; i>0; i--){
    setTimeout(show, i*1000, i)
}
//setTimeout(callbackfunction, time, argument, 2nd argument (optional))
//