/* Problem Statement 
Given an array of integers nums,
 sort the array in increasing/ascending order based on the frequency of the elements.
  If multiple elements have the same frequency, sort them in decreasing order.
   Return the sorted array. 
   
   Constraint • 1 <= nums.length <= 100 • -100 <= nums[i] <= 100 Input Format • Space separated integers Output Format • Sorted array based on frequency of elements Sample Input 1 1 1 2 2 2 3 Sample Output 1 3 1 1 2 2 2 Explanation of Sample 1 '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3. Sample Input 2 2 3 1 3 2 Sample Output 2 1 3 3 2 2 Explanation of Sample 2 '2' and '3' both have a frequency of 2, so they are sorted in decreasing order. Sample Input 3 -1 1 -6 4 5 -6 1 4 1 Sample Output 3 5 -1 4 4 -6 -6 1 1 1 Explanation of Sample 3 '5' and '-1' both have a frequency of 1, so they are sorted in decreasing order. Similarly for '4' and '-6'. '1' has frequency of 3 */

   /*
let arr = readline().split(" ").map(x => parseInt(x));

function frequencySort(arr)
{
    //write your logic here, return the output. Do not print anything

}

console.log(frequencySort(arr).join(" ")); */

let arr = [6,2,3,4,2,2,3,4,1,1,0,6,6,6,1,1,1,1,0,0,0,2,3,4]

let data = []
let n = arr.length
for(let i=0; i<n; i++){
    let m = data.length
    if(m == 0){
        data.push([arr[i],1])
    }
    else{
        let isPresent = false
        let location;
        for(let j=0; j<m; j++){
            if(arr[i]==data[j][0]){
                isPresent = true
                location = j
                break;
            }
        }
        
        if(isPresent==true){
            data[location][1]++;
        }
        else{
            data.push([arr[i],1])
        }
    }
}

function selectionSort1(arr){
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

selectionSort1(data)

for(let i=1; i<data.length; i++){
    let minE = i-1;
    let isSwapped = false;
   for(let j=i; j<data.length; j++){
    if(data[minE][1]==data[j][1]){
        if(data[minE][0]>data[j][0]){
            minE = j;
            isSwapped = true;
        }
    }
}
if(isSwapped==true){
    [data[minE], data[i]] = [data[i], data[minE]]
}
}

let res = []

for(let i = 0; i<data.length; i++){
    res.push(data[i][0])
}
return res;