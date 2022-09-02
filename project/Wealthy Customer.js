/* Problem Statement 
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has. A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth. Constraint • m == accounts.length • n == accounts[i].length • 1 <= m, n <= 50 • 1 <= accounts[i][j] <= 100 Input Format • The first line of input consists of a m and n as integer value • The m lines of input consists n space separated integers Output Format • Return the wealth customer position (starting from 1) 
Sample Input 1 2 3 1 1 4 2 2 3 Sample Output 1 2 Explanation of Sample 1 1st customer has wealth = 1 + 1 + 4 = 6 2nd customer has wealth = 2 + 2 + 3 = 7 The 2nd customer is the richest with a wealth of 7. Sample Input 2 3 2 1 5 5 3 3 7 Sample Output 2 3 Explanation of Sample 2 1st customer has wealth = 6 2nd customer has wealth = 8 3rd customer has wealth = 10 The 3rd customer is the richest with a wealth of 10. Sample Input 3 2 3 1 2 3 3 2 1 Sample Output 3 1 Explanation of Sample 3 1st customer has wealth = 1 + 2 + 3 = 6 2nd customer has wealth = 3 + 2 + 1 = 6 Both customers are considered the richest with a wealth of 6 each, so return 1 (return the latest i.e. minimum position). */

let [m, n] = readline().split(" ").map(x => parseInt(x));
let accounts = [];
for(let i = 0; i < m; i++){
    let arr = readline().split(" ").map(x => parseInt(x)).slice(0, n);
    accounts.push(arr);
}

function wealthyCustomer(accounts, m, n)
{
    //write your logic here
let arr = []
for(let i = 0; i<m; i++){
    let money = 0
    for(let j= 0; j<n; j++){
        money+= accounts[i][j] 
    }
    arr.push(money)
}
let wealthperson = 0;
for(let i = 1; i<arr.length; i++){
    if(arr[i]>arr[wealthperson]){
        wealthperson = i;
    }
}
return wealthperson
}

console.log(wealthyCustomer(accounts, m, n));