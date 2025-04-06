interface User {
    name: string;
    age: number;
}

const sumofage = (user1:User , user2:User) => {
    return user1.age+user2.age;
}

console.log(sumofage({name:'adam',age:22},{name:'rat',age:25}));

type updateduser = Pick<User,'name'|'age'>;

const updatedtest = (user1:updateduser,user2:updateduser):string => {
    let str :string = user1.name + user2.name;
    return str;
}

console.log(updatedtest({name:'adam',age:22},{name:'rat',age:25}));

type newone = {
    name: string;
    age: string;
}

type newonedotone = {
    [key:string] : newone;
}

const obj = {
    "keystring":{
        name: 'namestring',
        age: "agestring"
    }
}

console.log(obj.keystring.name);