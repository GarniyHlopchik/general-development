'use strict';

const countTypesInArray = (arr) => {
    const dict = {}
    for(const element of arr){
        const type = typeof element
        dict[type] === undefined ? dict[type] = 1 : dict[type] +=1
    }
    return dict
}

const arr = [true, false, 1,2,3,"string1","string0",true, 5, "false"]
console.dir(countTypesInArray(arr))