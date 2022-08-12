 function mergeSort(a1,a2){
    let res = []//in which result will be stored
    let p1 = 0;
    let p2 = 0;
    let k = 0;

    while(p1<a1.length && p2<a2.length){ // will enter all the elements of a1 and a2.. up to no min element of these 2
        if(a1[p1]<a2[p2]){
            res.push(a1[p1]);
            p1++
            k++
        }
        else{
            res.push(a2[p2])
            p2++
            k++
        }
    }
    if(p1==a1.length){
        while(p2<a2.length){
            res.push(a2[p2])
            p2++
            k++
        }
    }
    
    if(p2==a2.length){
        while(p1<a1.length){
            res.push(a1[p1])
            p1++
            k++
        }
    }
    return res;
 }

 let opt = mergeSort([2,3,5,67,88,9999],[1,1,22,23,34,45,67,89,1234])
 console.log(opt)