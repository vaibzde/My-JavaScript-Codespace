let givArray = [8,5,3,1,9,3,5];

function bubbleSort(arr){
    //here bubbles are created and gets bigger as size increases
    let n = arr.length
    //here trying to sort in asscending order
    //here the main iteration happens for the number of rounds require so that it gets sorted..
    //which is less and equal to n-1    
    for(let i=0; i<n-1; i++){
        //inside it the continuous swap happens so the swapping will be done to create a bubble
        //bubble is what, the sorted part of array.. here the size of bubble in initial is zero
        //here main operation is, checking if a<b or not, if yes continue to next element.. else swap
            let swapCheck = false
        for(let j=0; j<n-1-i; j++){//here n-1-i is for  -  <n-1 for because while swapping if will check j and j+1 element also.. and i to eliminate the check in bubble 
            if(arr[j]>arr[j+1]){//simply by changing this condition, we can change the accending and desending
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                swapCheck = true;
            }
        }
        if(swapCheck==false){
            break;
        }
    }
    console.log(arr)
    return arr;
}


function selectionSort(arr){
    //here we have unsorted array and sorted array
    //generally thge sorted array we take is the first element.. as the 1 element is always sorted
    let n = arr.size
    //first loop will go throgh all the unsorted array elements liniery.. and the 1st element of unsorted is at  i  =1;
    for(let i = 1; i<n; i++){
        //inside it we will pick the element arr[i] and will plkace it inside sorted array.. so for that we will increase the size of sorted and then swapping will be done
        for(let j = i; j>0; j--){
            if(arr[j]<arr[j-1]){//for accending
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]];
                j--;//updated the new position of highligted element
            }
            else{
                break;
            }
        }
    }
    console.log(arr)
    return arr
}


function insertionSort(arr){
    //here the right element gets swapped for correct position
    let n = arr.size
    for(let i=0;i<n;i++){
        let minIndex = i
        for(let j=i+1; j<n; j++){
            if(arr[minIndex]>arr[j]){//accending
                minIndex = j
            }          
        [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
    }
    console.log(arr)
    return arr;
 }
}

bubbleSort(givArray)
selectionSort(givArray)
insertionSort(givArray);