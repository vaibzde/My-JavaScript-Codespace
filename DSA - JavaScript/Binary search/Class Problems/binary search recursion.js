function getBinarySearch(arr, target){
    let n = arr.length - 1

    recursiveBinary(arr, target, 0, n)
}

function recursiveBinary(arr, target, low, high){
    
    //base case
    if(high<low){
        return -1;
    }
    let mid = Math.floor((high+low)/2)

    if(arr[mid]==target){
        return mid;
    }

        //self work and recursove work

        if(arr[mid]>target){
           return recursiveBinary(arr, target, low, mid-1)
        }
        else{
           return recursiveBinary(arr, target, mid+1, high)
        }

}

//doing in non recursive way
let BinarySearchNonRec = function(arr, x){
    let end = arr.length-1;
    let start = 0;
    while(end>=start){
        let mid = Math.floor((start+end)/2)

        if(arr[mid]===x) return mid;

        else if(arr[mid]>x){
            end = mid - 1;
        }
        else{
            start = mid + 1
        }
    }
    return -1;
}