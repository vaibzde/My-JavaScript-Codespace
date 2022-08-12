let arr = [[1],[2,3],[]]
let vr = []
console.log(vr)
for(i=0;i<arr.length;i++){
    console.log(i)
                            vr.push(arr[i])
    console.log(vr)
                             let temp = [...arr[i]];
    console.log(temp)
    console.log(vr)
                             temp.unshift("new")
                             console.log(vr)
    console.log(temp)
                             vr.push(temp);
    console.log(vr)
    console.log(`nextloop \n`)
}
console.log(vr)