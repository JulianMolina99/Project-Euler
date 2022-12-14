/*

Problem 2: Even Fibonacci Numbers
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.

*/

function fiboEvenSum(n) {
      let previusPreviusNumber = 1;
      let previusNumber = 2;
      let currentNumber = 3;
      let sum = 2;

      while(currentNumber <= n){
            previusPreviusNumber = previusNumber;
            previusNumber = currentNumber;
            currentNumber = previusNumber + previusPreviusNumber;
            if(currentNumber % 2 === 0){
                  sum += currentNumber;
            }

      }
      console.log(sum);
      return sum;
}+
