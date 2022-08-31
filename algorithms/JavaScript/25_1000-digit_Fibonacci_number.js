/* 
The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain n digits?

*/


function digitFibonacci(n) {
      let fPrevius = 1;
      let fPreviusPrevius = 1;
      let control = true;
      let fCurrent = fPreviusPrevius + fPrevius;
      let fn = 3;
      n = Math.pow(10,n-1);
      while(control){
            if(fCurrent/n >= 1){
                  control = false;
            } else{
                  fPreviusPrevius = fPrevius;
                  fPrevius = fCurrent;
                  fCurrent = fPreviusPrevius + fPrevius;
                  console.log(fCurrent);
                  fn++;
            }
      }
      return fn;
}
