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
