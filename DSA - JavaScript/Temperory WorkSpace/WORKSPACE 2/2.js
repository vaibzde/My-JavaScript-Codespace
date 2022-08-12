//commenting is left
function combinationSum(arr,target){
    arr.sort((a,b)=>(a-b));
    let ans = new Array();
    let temp = new Array();
    getNumbers(ans,arr,target,0,temp)
    return ans;
}

function getNumbers(ans,arr,target,index,temp){
    let sum = 0
    for(let j=0; j<temp.length;j++){
        sum+= temp[j]
    }
    let diff = target - sum;
    if(sum==target){
        ans.push([...temp]);
        return;
    }
     for(let i=index;i<arr.length;i++){
    if(arr[i]<=diff){
        temp.push(arr[i])
        getNumbers(ans,arr,target,i,temp)
        temp.pop()
    }
    else{
        break;
    }
}
}

console.log(combinationSum([2,3,6,7],7))
