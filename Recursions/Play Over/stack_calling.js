
//seeing how stack callin works for function

function a(){
    console.log(`a entered in stack`)
    b()
    console.log(`a exited from stack`)
}

function b(){
    console.log(`b entered in stack`)
    c()
    console.log(`b exited from stack`)
}
function c(){
    console.log(`c entered in stack`)
    base_case()
    console.log(`c exited from stack`)
}
function base_case(){
    console.log(`base case entered in stack`)
    console.log(`base case has done its work`)
    console.log(`base case exited from stack`)
}

//calling function
a();