let arr =[[1,2,3,4],[5,6,7,8],[9,10,11,12]]

let colomn = arr[0].length
let row = arr.length
let temp = [...Array(colomn)].map(e=>Array(row))//way of cre4ating array of desired size
for(i=0;i<arr.length; i++){
    
    for(j=0; j<colomn; j++){
        temp[j][i]=arr[i][j];
    }
}
console.log(temp)