let a1 = [[3,2],[1,0],[0,5]]
function selectionSort(arr){
    let n = arr.length
    for(let i = 0; i<n-1; i++){
        //here we will create the min element id, by default the left most element of unsorted array
        let minElemId = i;
        //taking a loop for finding the unsorted array,
        //updation the unsorted array at initialization part only
        for(let j=i; j<n; j++){
            if(arr[j][1]<=arr[minElemId][1]){
                minElemId = j;
            }
        }
        //here we will swap the min element wil the left most element of unsorted array
        [arr[i],arr[minElemId]] = [arr[minElemId],arr[i]]
    }
    return arr;
}

console.log(selectionSort(a1))
