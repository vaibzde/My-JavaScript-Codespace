//let n = parseInt(readline());
let n = 34
function letsFizzBuzz(n){
    // use console.log("hello") to print the output, you may use string to concat output in one line
    let output = ``;
	for(i=1; i<=n; i++){
	
    if(i%3==0 && i%5==0){
		output = `FizzBuzz`;
	}
	else if(i%3==0){
		output = `Fizz`;
	}
	else if(i%5==0){
		output = `Buzz`;
	}
	else{
		output = i;
	}
    console.log(output);
}
}

letsFizzBuzz(n);

/*The FizzBuzz
Problem Statement You are given an integer n, for all the numbers from 1 to n, print ‘Fizz’ if it is divisible by 3, print “Buzz” if it is divisible by 5 and “FizzBuzz” if it is divisible by both or else just print that number Constraint • 1 <= n <= 10^4 Input Format • The single first line of input consists of a single integer n

Output Format • For all numbers 1 to n, print ‘Fizz’ if it is divisible by 3, print “Buzz” if it is divisible by 5 and “FizzBuzz” if it is divisible by both or else just print that number

Sample Input 1 4 Sample Output 1 1 2 Fizz 4 Explanation of Sample 1 1 and 2 is nor divisible by 3 neither by 5 so print 1 and 2 as it is, 3 is divisible by 3 so print Fizz, 4 is not divisible by 3 and 5 so print 4

Sample Input 2 5 Sample Output 2 1 2 Fizz 4 Buzz Explanation of Sample 2 1 and 2 is nor divisible by 3 neither by 5 so print 1 and 2 as it is, 3 is divisible by 3 so print Fizz, 4 is not divisible by 3 and 5 so print 4, and 5 is divisible by 5 so print Buzz

Sample Input 3 2 Sample Output 3 1 2 Explanation of Sample 3 1 and 2 is nor divisible by 3 neither by 5 so print 1 and 2 as it is

Sample Input 4 16 Sample Output 4 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 Explanation of Sample 4 1 and 2 is nor divisible by 3 neither by 5 so print 1 and 2 as it is, 3 is divisible by 3 so print Fizz, 4 is not divisible by 3 and 5 so print 4, and 5 is divisible by 5 so print Buzz, so on and for15 it is divisible by both so print FizzBuzz
*/