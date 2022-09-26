/*
Problem 15: Lattice paths
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
*/

function latticePaths(gridSize) {
      let result = Math.floor(factorial(gridSize*2)/(factorial(gridSize)*factorial(gridSize)));
      return result;
}
    
function factorial(number){
      let result = 1;
      for(let i = number; i > 0; i--){
      result = result * i;
      }
      return result;
}
