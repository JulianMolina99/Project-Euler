/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number. */

function multiplesOf3and5(number) {
    let counter = 3;
    let result = 0;
    while(counter < number){
        if((counter % 3 === 0) || (counter % 5 == 0)){
            result = result + counter;
        }
        counter++;
    }
    return result;
  }
