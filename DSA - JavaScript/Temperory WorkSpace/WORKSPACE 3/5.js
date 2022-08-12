

 function mergeSortInp(arr){
    function mergeTwoSort(a1,a2){
        let res = []//in which result will be stored
        let p1 = 0;
        let p2 = 0;
        let k = 0;    
        while(p1<(a1.length)&& p2<(a2.length)){
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
     
     let e = arr.length - 1
    
     function mergeSort(arr,start,end){
        if(start>=end){
            return;
        }
        let mid = parseInt((start+end)/2)

        let arr1 = mergeSort(arr,start,mid);
        let arr2 = mergeSort(arr,mid+1,end);

        let result = mergeTwoSort(arr1,arr2);
        return result;
     }

    return mergeSort(arr,0,e);
 }

 let opt = mergeSortInp([2,7,1,5,1,67,11,4])
 console.log(opt)