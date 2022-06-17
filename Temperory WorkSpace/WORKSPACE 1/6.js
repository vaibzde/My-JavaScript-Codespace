//print n=5 then opt// 1,2,3,4,5
//using recursion

function printn(n){
 //base case   
    if(n==1){
        console.log(1)
        return
    }
    printn(n-1)//recuesive call
    console.log(n)//self work
}

printn(5)

//now print in reverse
function printr(n){
    //base case   
       if(n==1){
           console.log(1)
           return
       }
       
//just shifting the self work before recursive call will work
       console.log(n)//self work
       printr(n-1)//recuesive call
       
   }
   
   printr(7)