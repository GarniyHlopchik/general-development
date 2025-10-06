'use strict';

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */

const phonebook = {
    Arthur: "+380990947283",
    Andrew: "+380959024843",
    Thomas: "+380930913804",
    Elizabeth: "+380669213892"
};

const findPhoneByName = (name) => {
    return phonebook[name]
};

console.log(findPhoneByName("Thomas"))

module.exports = { phonebook, findPhoneByName };