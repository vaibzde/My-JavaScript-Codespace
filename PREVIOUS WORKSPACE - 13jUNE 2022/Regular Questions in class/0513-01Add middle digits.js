/*Problem Statement:
Given a positive number you need to write a program in javascript to find the sum of the inner digits of
that number.

Explanation - 1:
The Inner digits of the number 2124 are 1 and 2 whose sum is 3
Explanation - 2:
The Inner digits of the number 70 is None therefore the output will be -1.
Note: Same is the case for number with single digit*/

var num = 14567
var numOrignal = num
var noOfDigits = 0;
var sum = 0
 while(num>0){
     noOfDigits++
     num = parseInt(num/10)
 }
 num = numOrignal //assigning the orignal number back to num, as we are changing the num to find the number of digits
 if(noOfDigits>2){
     //logic
     do{
         num = parseInt(num/10)
         sum+=(num%10)
     }while((parseInt(num/100))>0)
 }
 else{
     sum = -1
 }
 console.log(`Answer of ${numOrignal} is ${sum}`)