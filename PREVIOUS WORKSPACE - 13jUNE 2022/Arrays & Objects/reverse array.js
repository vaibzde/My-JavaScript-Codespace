let inp = [1,2,3,4,5,6]
//              ^^
function reverseArray([arr]){
    //l is left side pointer
    //r is right side pointer
    let l = 0
    let r = arr.length - 1
    let temp//will be used for swaping
    //2pointers l,r at each end will traverse towards each other, till they meet each other
    //and keep on swaping arr elements btw l and r on each loop
    while(l<r){
        temp = arr[l]
        arr[l] = arr[r]
        arr[r] = temp
        l++
        r--
    }
    return arr
}

console.log(reverseArray([inp]))