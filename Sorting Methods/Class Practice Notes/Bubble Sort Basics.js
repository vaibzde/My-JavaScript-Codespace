//bubble sort
//raw and very basic non optimised approach
/*
here, we will try to bubble up the elements in the end..
it will start with the small bubble, as we increase the size of elements the size of bubble will also increase..
as shown above
based on swaping
*/
let given = [6,2,4,8,1,3,7]
function bubbleSort(arr){
    let n = arr.length;
    for(let i=0; i<n-1 ; i++){
        for(let j=0; j<=n-1-i; j++){
            if(arr[j]>arr[j+1]){
               // swap(arr[j],arr[j+1])
               [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}
console.log(bubbleSort(given))


//time complexity O(n^2)
//space complexity O(1)

