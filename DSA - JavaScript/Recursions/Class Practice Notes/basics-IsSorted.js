//to check if the array is asorted or not.. using recursion
//and to return true or false..
let arr = [1,3,76,576]
function isSorted(arr,i){//is function ka matlab array from ith index is sorted or not
//big task is to find all elements are sorted or not
//small task or self work is to check the ith elemnt and i+1th element
//recursive call here is.. bhai tu array from i+1 element 
//ko check kar sorted hai ki nhi,
//base case here is bhai jab array itna chota hojae ki isme ek hi element bache to return true krwa dena

//sab se pehle base case
if(i==(arr.length - 1)){
    return true
}
//fir ab recursion call
let value = isSorted(arr,i+1)

//self work
if(value && (arr[i]<=arr[i+1])){
    return true;
}
else{
    return false
}

}

console.log(isSorted(arr,0))//by default pass 0