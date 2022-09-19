//solving in recursive way
function ternarySearch(array, target){
    let res = ternSearch(array, target, 0, array.length-1)
    return res;
}

function ternSearch(arr, targ, low, high){
    // defining m1 and m2. two middle which devide the array in 3 parts
    
    let m1 = Math.floor(low + (((high-low)/3)*1))
    let m2 = Math.floor(low + (((high-low)/3)*2))

    //base case
    if(m1>m2){
        return [false,-1]
    }

    if(arr[m1]==targ){//case for true in m1
        return [true, m1]
    }

    if(arr[m2]==targ){//case for true in m2
        return [true, m2]
    }

    if(targ<arr[m1]){
        return ternSearch(arr, targ, low, m1-1)
    }
    else if(targ>arr[m1] && targ<arr[m2]){
        return ternSearch(arr, targ, m1+1, m2-1)
    }
    else{
        return ternSearch(arr, targ, m2+1, high)
    }
}

let ai = [2,3,4,5,6,7,8,9,11,22,23,24,123,1234]
console.log(ternarySearch(ai,8))