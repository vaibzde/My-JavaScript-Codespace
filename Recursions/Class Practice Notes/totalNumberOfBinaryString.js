//given a number n
//code total no of biary string
//not have consecutive one
/* for example n=1 0,1
for n =2 total posible string is 00,01, 10,11, but 11 is not allowed so total 3
the relation btw is.. addition of previous two is the current one
base case here he for n=1 and 2.. for case1=2, case2=3*/
function totalBinaryString(n){
    //base case
    if(n==1 || n==2){
        if(n==1){
            return 2;
        }
        if(n==2){
            return 3;
        }
    }

    //recursive call
    let val1 = totalBinaryString(n-1)
    let val2 = totalBinaryString(n-2)

    return val1 + val2;
}

console.log(totalBinaryString(7))
