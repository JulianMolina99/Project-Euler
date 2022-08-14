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
