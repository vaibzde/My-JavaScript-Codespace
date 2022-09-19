let arr = [3,7,1,10,2,1,0]

function find(target,arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]==target){
            return true;
        }
    }
return false;
}

console.log(find(10,arr))