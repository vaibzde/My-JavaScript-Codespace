//insetion sort
//In every iteration, we pick first element of unsorted region and place it/ at right position in the sorted region.
debugger;
function insetionSort(arr){
  
    let n = arr.length;

    for(let i=1; i<n; i++){
        let elemIndex = i;//of which we have to place it in right position
        //here unsorted region starts from i, and sorted region ends in i-1
        for(let j=i-1; j>=0; j--){//iterating through all the sorted elem
            if(arr[elemIndex]<arr[j]){//if yes, then swap
                [arr[elemIndex], arr[j]] = [arr[j],arr[elemIndex]];
                elemIndex--;//updating the position
            }
            else{
                break;//it reaches, where it should be
            }
        }
    }
    return arr;
}
let giv = [8,2,0,7,1,3,9];
console.log(insetionSort(giv))
//time complexity wors and avg => O(n^2)
//for best case => O(n)
//space complexity O(1) //inplace Algo