"use strict";
const sumofage = (user1, user2) => {
    return user1.age + user2.age;
};
console.log(sumofage({ name: 'adam', age: 22 }, { name: 'rat', age: 25 }));
const updatedtest = (user1, user2) => {
    let str = user1.name + user2.name;
    return str;
};
console.log(updatedtest({ name: 'adam', age: 22 }, { name: 'rat', age: 25 }));
const obj = {
    "keystring": {
        name: 'namestring',
        age: "agestring"
    }
};
console.log(obj.keystring.name);
