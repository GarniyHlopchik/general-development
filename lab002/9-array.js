'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
    {name: "Arthur",phone:"+380990947283"},
    {name: "Andrew",phone:"+380959024843"},
    {name: "Thomas",phone:"+380930913804"},
    {name: "Elizabeth",phone:"+380669213892"}
];

const findPhoneByName = (name) =>{
    for(const record of phonebook){
        if(record.name === name){
            return record.phone
        }
    }
    return false;
}
console.log(findPhoneByName("Andrew"))
console.log(findPhoneByName("Kris"))

module.exports = { phonebook, findPhoneByName };