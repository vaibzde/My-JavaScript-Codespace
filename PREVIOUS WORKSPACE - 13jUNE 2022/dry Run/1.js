/*Requirements: "Problem Statement-2:

Item delivery needs to take place for a circle of size B. Suppose we start from the position C (given) then find the position where the Ath item will be delivered.
Note: Distribution of Items are performed at the adjacent positions starting from C.
Expected Input: Three integers A, B, C
Expected Output: Integer denoting the position of the delivery of the Ath item if started from position C. Please submit you code as a repository on Google doc link.

Example-1:
Input
2,5,1
Output
2


Example-2:
Input
8,5,2
Output
4*/

//a to find this a item will be delivered
//b size of circle
//c starting position
function deliveryPosision(a,b,c){
let rp = c;//rp is running possision
//running it till i<a because.. the delivey of ath idem not achived
for(i=1; i<a; i++){ //it is like each item will be delivered in adjecent position
   rp++
    if(rp>b){
        rp=1
    }

}
return rp;
}
console.log(deliveryPosision(8,5,2))//