//29/05/22

let nums = [3,2,4]
let target = 6
let len = nums.length
//nums.sort()
nums.map((a,b)=>a-b)
console.log(nums)
let endP = len - 1;

let initP = 0;
while(initP<endP){
    if((nums[initP] + nums[endP]) > target){
        endP--
    }
    else{
        if(nums[initP] + nums[endP] == target){
            console.log(initP, endP)
            break;
        }
        else{initP++}
    }
    console.log(initP, endP)
   
}
//return [initP, endP]