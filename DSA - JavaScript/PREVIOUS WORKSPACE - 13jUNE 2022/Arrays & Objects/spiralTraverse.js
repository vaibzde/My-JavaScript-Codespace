let arr = [[1,2,3], [4,5,6], [7,8,9]]

//let temp = [...Array(arr1.length)].map(e=>(Array(arr1[0].length)))
let rowMin = 0
let rowMax = arr.length - 1
let colMin = 0
let colMax = arr[0].length - 1

while(rowMax!==rowMin || rowMax!==colMax || colmax!==colMin || colMin!==rowMin){
    for(let i=rowMin; i<rowMax; i++){
        console.log(arr[i][colMin])
    }
    colMin++
    for(let i=colMin; i<=colMax; i++){
        console.log(arr[rowMax][i])
    }
    rowMax--
    for(let i=rowMax; i>=rowMin; i--){
        console.log(arr[i][colMax])
    }
    colMax--
    for(let i=rowMax; i>=rowMin; i--){
        console.log(arr[rowMin][i])
    }
    rowMin--
}