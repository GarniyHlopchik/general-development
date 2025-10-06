
'use strict';

const generateKey = (length, possible) => {
   let result = "";
   for(let i = 0; i < length;i++){
    result+=possible[Math.floor(Math.random()*(possible.length-1))];
   }
   return result;
};

const charset = "abcdefghijklmnopqrstuvwxyz1234567890";
console.log(generateKey(16, charset));

module.exports = { generateKey };
