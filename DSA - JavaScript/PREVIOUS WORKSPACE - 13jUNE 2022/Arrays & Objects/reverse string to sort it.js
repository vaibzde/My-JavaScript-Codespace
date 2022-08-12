let inp = [ -2, -1,0,1,5, 3,2, 7,8]
//              ^^
function reverseArrayToSort([arr]){
    //l is left side pointer
    //r is right side pointer
    let l = 0
    let prev = arr[0]
    let curr = arr[1]
    for(i=1;prev<curr; i++){
      prev = arr[i-1]
      curr = arr[i]
      l = i - 1
    }

    let r = arr.length - 1
        let prev1 = arr[l]
        let curr1 = arr[l+1]
        for(j=1;prev1>curr1; j++){
          prev1 = arr[j-1]
          curr1 = arr[j]
          r = j - 1
        }
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

console.log(reverseArrayToSort([inp]))