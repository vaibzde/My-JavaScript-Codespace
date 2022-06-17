function factorial(x){
    //base call
    if(x==1 || x==0){
        return 1;
    }
    
    let res = factorial(x-1)//recursive call
    return res*x;//self work
}
console.log(factorial(3))