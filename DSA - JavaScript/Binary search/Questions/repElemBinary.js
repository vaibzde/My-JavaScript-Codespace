/*You are Given a series of positive integer numbers in the form of a sorted array as Ai where i is the index. N is the positive number which you have to check in the given array Ai whether the given N is duplicate in the Array or not. If it is duplicate output as “FALSE” if it is non duplicate output as “TRUE”.
Note: Use Binary search algorithm to find the N.*/

//here we will search elem with binary search..
//then check  the nearby elem, so we will get whether repetitive or not
debugger;
function repElem(arr, target){
    let low = 0;
    let high = arr.length-1
    let index = null;

    while(low<=high){
        let mid = Math.floor((high+low)/2)
        if(arr[mid]==target){
            index = mid;
            break;// you were not breaking, you have to break as you are not returning
        }
        else if(arr[mid]>target){
            high = mid - 1;
        }
        else{
            low = mid + 1;
        }
    }

    if(index!=null){
        if(arr[index-1]==target || arr[index+1]==target){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return `${target} doesn't exist in ${arr}`
    }
}

let ai = [1,2,2,3,4,5,5,5,6,7,8,999,1111]
console.log(repElem(ai,5))