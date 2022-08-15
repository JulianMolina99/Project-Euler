/* The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n. */

function primeSummation(n) {
  let sum = 2;
  for(let i = 3; i < n; i+=2){
    if(isPrime(i)){
      sum = sum + i;
    }
  }
  return sum;
}
function isPrime(n){

  for(let i = 2; i < Math.round(Math.sqrt(n) + 1); i++){
    if(n % i === 0){
      return false;
    }
  }
  return true;
}
