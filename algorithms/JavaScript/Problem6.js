/* The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 55^2 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum */

function sumSquareDifference(n) {
    let sum1 = sumSquare(n);
    let sum2 = gausSumation(n);
    console.log(sum1,sum2);
    let difference = Math.pow(sum2,2) - sum1;
    console.log(difference);
    return difference;
  }

function sumSquare(number){
    return (number*(number+1)*(2*number+1))/6;
}

function gausSumation(number){
    return (number*(number+1))/2;
}
