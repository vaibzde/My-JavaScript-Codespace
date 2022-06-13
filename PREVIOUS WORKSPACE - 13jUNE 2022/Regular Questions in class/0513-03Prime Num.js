/*
var number = 2
function isPrime(num){
    for(let i = 2; i<num; i++){
        if((num%i)!=0){
if(i==parseInt((num/2)+1)){
    return true
    //console.log(`${num} is a prime number`)
    break
}
        }
        else{
            return false
            //console.log(`${num} is not a prime number`)
        break
        }
    }
}

console.log(isPrime(number))
*/

//shorter
number = 11
function isPrime(n)
{
    // Corner case
    if (n <= 1)
        return false;
  
    // Check from 2 to n-1
    for (let i = 2; i < Math.min(parseInt((n/2) + 1), n); i++)
        if (n % i == 0){
            return false;
        //    break
        }
  
    return true;
}
console.log(isPrime(number))