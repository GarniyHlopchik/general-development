'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  // Parse ip address as string, for example '10.0.0.1'
  // to ['10', '0', '0', '1'] to [10, 0, 0, 1]
  ip = ip.split(".");
  ip = ip.map(element => parseInt(element));
  
  // and convert to Number value 167772161 with bitwise shift
  // (10 << 8 << 8 << 8) + (0 << 8 << 8) + (0 << 8) + 1 === 167772161
  
  const shift = (accumulator, element, index) => {
    let shifted = element << (8*(3-index))
    
    return accumulator + shifted
  }
  
  return ip.reduce(shift,0)
  // Use Array.prototype.reduce of for loop
};
console.log(ipToInt())
console.log(ipToInt("10.0.0.1"))
module.exports = { ipToInt };