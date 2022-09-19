
debugger



let arr = [1,2,3,4,5,6,8,9.10]
let targ = 14;

let res
    let start = 0;
    let end = arr.length-1;

    while(start<end){
        let mid = Math.floor((start+mid)/2)

        if((arr[mid] + arr[mid+1]) === targ || (arr[mid] + arr[mid-1]) === targ){
            if(arr[mid]+arr[mid+1]==targ){
                res = [arr[mid], arr[mid+1]]
            }
            else{
                res = [arr[mid-1], arr[mid]]
            }
        }

        if(targ<(arr[mid]+arr[mid+1]) || targ<(arr[mid]+arr[mid-1])){
            end = mid-1
        }
        else{
            start = mid+1
        }
    }
console.log(res)