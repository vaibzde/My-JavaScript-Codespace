arr = [[0,1,2,0,0,0],[0,0,6],[0,0,0]]
debugger
//function isSparseArray([arr]){
    
let totalElem = 0
let tempSize = 0
let totalZero = 0
for(let i=0;i<arr.length; i++){
     tempSize = arr[i].length
    for(let j=0;j<tempSize;j++){
        //console.log(arr[i,j])
        if(arr[i][j]==0){
            //console.log(arr[i,j])
            totalZero = totalZero + 1
        }
    }
    totalElem += tempSize
    console.log(totalZero)
}
if(parseInt(totalElem/2)<=totalZero){
    console.log(true) 
}
else{
    console.log(false) 
}

//console.log(isSparseArray([arr1]))