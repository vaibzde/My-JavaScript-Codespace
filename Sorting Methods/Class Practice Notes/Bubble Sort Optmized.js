//bubble sort
//optimised approach
let given = [6,2,4,8,1,3]
function bubbleSort(arr){
   
    let n = arr.length;
    for(let i=0; i<n-1 ; i++){
        //for every iteration, we will check if any swapping will be done of not
        let isSwapped = false;
        for(let j=0; j<=n-1-i; j++){
            if(arr[j]>arr[j+1]){
               // swap(arr[j],arr[j+1])
               [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
               //if swapping will be done, we will change it to true
               isSwapped = true;
            }
        }
        //if their is no swapping is done above, means the array is sorted
        if(!isSwapped){
            //if already sorted then, there is no meaning of going into another iteration
        break;
        }    
    }
    return arr
}
console.log(bubbleSort(given))


//time complexity O(n^2)
//space complexity O(1)

