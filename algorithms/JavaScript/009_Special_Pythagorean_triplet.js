/*

Problem 9: Special Pythagorean triplet
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.

*/


function specialPythagoreanTriplet(n) {
      let sumOfabc = n;
      let resultMult = 0;
      let control = true;
      let a = 2;
      let b = 0;
      let c = 0;
      while(control){
            if(a < sumOfabc){
                  b = calculateb(sumOfabc,a);
                  if(Number.isInteger(b)){
                        c = calculatec(a,b);
                        if(a+b+c === sumOfabc){
                              control = false;
                        } else{
                              a++;
                        }
                  } else{
                        a++;
                  }
            } else{
                  control = false;
            }
      }
      
      resultMult = a*b*c;
      return resultMult;
}

function calculateb(n,a){
      let b = (n*(a-n/2))/(a-n);
      return b
}

function calculatec(a,b){
      let sum = Math.pow(a,2) + Math.pow(b,2);
      let c = Math.sqrt(sum);
      return c;
}
