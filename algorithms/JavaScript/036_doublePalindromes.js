/*

Problem 36: Double-base palindromes
The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

Find the sum of all numbers, less than n, whereas 1000 ≤ n ≤ 1000000, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)

*/

function doubleBasePalindromes(n) {
      let sum = 0;
      for(let i = 0; i <= n; i++){
            if(isPalindrome(i)){
                  console.log(i);
                  sum += i;
            }
      }
      console.log(sum);
      return sum;
}

let isPalindrome = (number) =>{
      let result = true;
      let arrayBase10 = Array.from(String(number));
      let arrayBase2 = Array.from(number.toString(2));

      for(let i = 0; i < Math.floor(arrayBase10.length/2); i++){
            if(arrayBase10[i] !== arrayBase10[arrayBase10.length -1 - i]){
                  result = false;
                  break;
            }
      }

      if(result){
            for(let i = 0; i < Math.floor(arrayBase2.length/2); i++){
                  if(arrayBase2[i] !== arrayBase2[arrayBase2.length - 1 - i]){
                        result = false;
                        break;
                  }
            }
      }
      
      return result;
}
