//selection sort
/*
if we have any unsoted array, then this method will select the right method and putting it in correct position

here we will do less swaping
*/
function selectionSort(arr){
    let n = arr.length
    for(let i = 0; i<n-1; i++){
        //here we will create the min element id, by default the left most element of unsorted array
        let minElemId = i;
        //taking a loop for finding the unsorted array,
        //updation the unsorted array at initialization part only
        for(let j=i; j<n; j++){
            if(arr[j]<arr[minElemId]){
                minElemId = j;
            }
        }
        //here we will swap the min element wil the left most element of unsorted array
        [arr[i],arr[minElemId]] = [arr[minElemId],arr[i]]
    }
    return arr;
}

let given = [8,6,2,4,0]
console.log(selectionSort(given))

//time complexity O(n^2)
//space complexity O(1)
