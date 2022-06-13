//function multiplyMatrix(arr1,arr2){
    let arr1 = [[1,1,2],[2,1,0]]
    let arr2 = [[1,3], [0,1], [1,4]]


    arr1Row = arr1.length
    arr2Row = arr2.length
    arr1Col = arr1[0].length
    arr2Col = arr2[0].length

    let temp = [...Array(arr1Row)].map(e=>(Array(arr2Col)))

    for(let i =0; i<temp.length; i++){
        for(let j=0; j<temp[0].length; j++){
            let Mul = 1;
            let sum = 0;
            let m = 0
            for(k=0; k<arr1Col; k++){
                Mul = arr1[i][k] * arr2[m][j]
                m++
                sum += Mul;
            }
            temp[i][j] = sum
        }
    }
    console.log(temp)
//}

//let arr1 = [[1,1,2],[2,1,0]]
//let arr2 = [[1,3], [0,1], [1,4]]

