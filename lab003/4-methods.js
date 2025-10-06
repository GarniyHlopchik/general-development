'use strict';

const methods = (iface) => {
  // Introspect all properties of iface object and
  // extract function names and number of arguments
  // For example: {
  //   m1: (x) => [x],
  //   m2: function (x, y) {
  //     return [x, y];
  //   },
  //   m3(x, y, z) {
  //     return [x, y, z];
  //   }
  // will return: [
  //   ['m1', 1],
  //   ['m2', 2],
  //   ['m3', 3]
  // ]

  const arr = []
  for(const key in iface){
    if(typeof iface[key] === "function"){
        arr.push([key, iface[key].length])
    }
  }
  return arr;
};

const iface = {
    
     m1: (x) => [x],
     m2: function (x, y) {
       return [x, y];
     },
     junk1: "123",
     m3(x, y, z) {
       return [x, y, z];
     },
     junk2: "abcd",
    }
console.log(methods(iface))
module.exports = { methods };