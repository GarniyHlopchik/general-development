'use strict';

// Implement function `range(start: number, end: number): array` returning
// array with all numbers from the range [15, 30] including endpoints

const range = (start, end) => {
    const length = end - start;
    //validate input data
    if(length < 0 || length === NaN){
        throw new Error("Invalid input data");
    }
    const range_array = [];
    for(let i = 0; i<length+1; i++){
        range_array[i] = start+i
    }
    return range_array
}
console.log(range(-5,12))

module.exports = { range };