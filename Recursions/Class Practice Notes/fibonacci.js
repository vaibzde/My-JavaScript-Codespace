//fibonacci -  to find nth finonacci no
// 0 1 1 2 3 5 8 13....
// 0 1 2 3 4 5 6 7 Indexes
// as it require 2 elements for operation.. we will take 1 as base case
/* to find the nth element is the big task
and to find the n -1 and n-1 is the smaller problem..
// logic of fibonacci series is to nth element is the sum of previous two
recursive fxn => f(n) = f(n-1) + f(n-2)
//the addition here is self work

*/

function fibonacci(n){
    //base case first
    if(n==1 || n==0){
        return n;//as fib 0 is 0 and fibo 1 is 1
    }
    let res1 = fibonacci(n-1);//1st recursive call
    let res2 = fibonacci(n-2);//2nd recursive call
    let selfWork = res1 + res2;//this is self work
    return selfWork
}
console.log(fibonacci(5))

//printing series
//just run the loop outside
let arr = [];
for(let i=0; i<=8; i++){
    arr.push(fibonacci(i))
}
console.log(arr)
/*function fibonacciSeries(n){
    let arr = [];
    //base case first
    if(n==1 || n==0){
        return n;//as fib 0 is 0 and fibo 1 is 1
    }
    let res1 = fibonacci(n-1);//1st recursive call
    let res2 = fibonacci(n-2);//2nd recursive call
    let selfWork = res1 + res2;//this is self work
    arr.push(res)
    return selfWork,arr
}*/