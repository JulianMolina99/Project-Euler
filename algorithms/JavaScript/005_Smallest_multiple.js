/* 
Problem 5: Smallest multiple
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
*/

function smallestMult(number){
    let array = Array.from({length:number-1}, (v,i)=>{
        if(i==0){
            return 2;
        } else{
            return i + 2;
        }
    })
    
    let control = true;
    let start = array[array.length-1]; 
    let multiplier = 2;
    let counter = 0;
    while(control){

        for(let i = 0; i < array.length; i++){
            debugger;
             if(start % array[i] !== 0){
                start = array[array.length-1] * multiplier;
                multiplier++;
                break;
             } else{
                counter ++;
             }
        }
        if(counter === array.length){
            control = false;
        } else{
            counter = 0;
        }
    }
    console.log(start);
    
