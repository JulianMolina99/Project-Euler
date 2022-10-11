/*
Problem 16: Power digit sum
215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2exponent?
*/

function powerDigitSum(exponent) {

      let num = BigInt(Math.pow(2,exponent));
      let result = 0;
      let array = Array.from(String(num), (element)=>{
            return Number(element);
      });
      array.map((element)=>{
            result += element;
      });
      console.log(result);
      return result;
}
