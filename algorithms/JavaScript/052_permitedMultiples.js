/*

Problem 52: Permuted multiples
It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

Find the smallest positive integer, such that multiplied by integers  {2,3,…,n} , contain the same digits.

*/

function permutedMultiples(n) {
      let i = 1;
      let minNumber = 0
      while(true){
            if(checkNumbers(i, i*n)){
                  if(n === 2){
                        minNumber = i;
                        break;
                  } else{
                        if(isPermuted(i, n)){
                              minNumber = i;
                              break;
                        } 
                  }
                  
            }
            i++;
      }
      return minNumber;
    }


let isPermuted = (number, n) =>{
      let score = 2;
      for(let i = 2; i < n; i++){
            if(checkNumbers(number, number*i)){
                  score++;
            }
      }
      if(score === n){
            return true;
      } else{
            return false;
      }
}

let checkNumbers = (a,b) =>{
      return Array.from(String(a)).sort().join('') === Array.from(String(b)).sort().join('');
}
