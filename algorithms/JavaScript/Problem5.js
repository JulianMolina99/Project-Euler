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
    
