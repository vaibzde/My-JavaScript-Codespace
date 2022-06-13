let arr = [1,2,3,4]
for(i=0;i<arr.length-2;i++){
   // if(i+1>arr.length){
    //    i = 0
  //  }
    arr[i+1, i+2] = arr[i, i+1]
}
console.log(arr)