/*
Given an array, find all the SUBSEQUENCES
for any array of length n
the total no of subsequence = 2^n
empty array is also a sub sequence
*/
let a = [1,2,3]
// here you have to return a arrays of subsequences, which are arrays

function printSubsequence(arr,n){
    //basecase
    if(n==((arr.length)-1)){
        let res = []
        res.push([arr[n]])
        res.push([])
        return res;
    }

    //recursive call
    let subsequence = printSubsequence(arr, n+1)

    let sw = []
   
    for(i=0;i<subsequence.length;i++){
        sw.push(subsequence[i])
        let temp;
        temp = [...subsequence[i]]//imp syntax[...arr[i]]
        temp.unshift(arr[n])
        sw.push(temp)
    }
    return sw;
   
}

console.log(printSubsequence(a,0))