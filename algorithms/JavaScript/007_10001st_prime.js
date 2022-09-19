/*

Problem 7: 10001st prime
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?

*/

function nthPrime(n) {
      let varControl = true;
      let currentNumber = 2;
      let primeNumber = 0;
      while(n>0){
            if(isPrime(currentNumber)){
                  debugger;
                  n--;
                  primeNumber = currentNumber;
            }
            currentNumber++;
            
      }
      return primeNumber;
}

let isPrime = (number) => {
      let result = true;
      let topCount = Math.ceil(Math.sqrt(number) + 1);

      if(number === 1 || number === 0){
            return "undetermined";
      }

      if (number === 2){
            return result;
      }

      if(number < 0){
            return "invalid number";
      }

      for(let i = 2; i < topCount; i++){
            if(number % i === 0){
                  result = false;
                  break;
            }
      }
      return result;
}
