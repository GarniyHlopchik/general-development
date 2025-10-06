'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
    const constant_obj = {name: "blank"};
    let variable_obj = {name: "blank"};

    //changing the field works for both a constant and a variable
    constant_obj.name = "Frisk";
    variable_obj.name = "Chara";
    //the reason for it is that we don't change the object itself, only a field inside of it

    //assigning a different object to a constant doesn't work, because it changes the object itself
    variable_obj = {surname: "blank"};
    constant_obj = {surname: "blank"};

}
fn()

module.exports = { fn };