//leetcode 34
/*Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
  
    let n = nums.length
    
    function startingIndex(arr, target,n){
        let res = -1;
        
        let start = 0
        let end = n-1;
        
        while(start<=end){
            //will put things such that. in the left part of target element there should be elem that should be not a target
            let mid = Math.floor((start + end)/2)
            
            if(arr[mid]==target){
                if(arr[mid-1]!==target || mid==0){
                res = mid;
                break;
                }
                else{
                   end = mid-1; 
                }
            }
            else{
                if(arr[mid]<target){
                    start = mid + 1;
                }
                else{
                    end = mid - 1;
                }
            }
        }
        
        return res;
        
    }
    
    
    function endingIndex(arr, target,n){
        let res = -1;
        
        let start = 0
        let end = n-1;
        
        while(start<=end){
            //will put things such that. in the right part of target element there should be elem that should be not a target
            let mid = Math.floor((start + end)/2)
            
            if(arr[mid]==target){
                if(arr[mid+1]!==target || mid==n-1){
                res = mid;
                break;
                }
                else{
                   start = mid+1; 
                }
            }
            else{
                if(arr[mid]<target){
                    start = mid + 1;
                }
                else{
                    end = mid - 1;
                }
            }
        }
        
        return res;
        
    }
    
    let start = startingIndex(nums, target, n)
    let end = endingIndex(nums, target, n)
    
    return [start,end]
};