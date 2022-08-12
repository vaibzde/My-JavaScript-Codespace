let arr = [8,2,1,4,13,11,6,7,19, 22]
let arr1 = arr.sort()
console.log(arr1)
//Array(10) [ 1, 11, 13, 19, 2, 22, 4, 6, 7, 8 ]
//above order is lexicographical order
let arr2 = arr.sort((a,b)=>a-b)
console.log(arr2)
//Array(10) [ 1, 2, 4, 6, 7, 8, 11, 13, 19, 22 ]
