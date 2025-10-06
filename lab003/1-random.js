'use strict';

const random = (min, max) => {
  // Generate random Number between from min to max
  // Use Math.random() and Math.floor()
  // See documentation at MDN

  //overloading
  if(max === undefined){
    max = min;
    min = 0;
  }

  return Math.floor(min+Math.random()*(max-min))
};
console.log(random(20)); // min = 0
console.log(random(30,40));
module.exports = { random };