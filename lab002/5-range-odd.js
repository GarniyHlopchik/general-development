'use strict';

// Implement function `range(start: number, end: number): array` returning
// array with all odd numbers from the range [15, 30] including endpoints

const rangeOdd = (start, end) => {
    

    //if starts on even, skip first
    if(start % 2 === 0){
        // if even and ends with the same, return empty array
        if(start === end){
            return []
        }else{
        start+=1;
        }
        
    }
    const length = end - start;
    
    //validate input data
    if(length < 0 || length === NaN){
        throw new Error("Invalid input data");
    }
    const range_array = [];

    for(let i = 0; i<length+1; i+=2){
        range_array.push(start+i)
    }
    return range_array
}
console.log(rangeOdd(16,21));

module.exports = { rangeOdd };