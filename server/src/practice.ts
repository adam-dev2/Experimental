// const usersfname:string[] = ["adam","rat","john","doe"];
// const userslname:string[] = ["shaik","prat","doe","john"];
// const usersage:number[] = [22,17,19,20];

// interface User {
//     fname: string;
//     lname: string;
//     age: number;
// }

// const islegalage = (usersage: number[]) => {
//     for(let i=0;i<5;i++) {
//         if(usersage[i] > 18) {
//             const user: User = {
//                 fname: usersfname[i],
//                 lname: userslname[i],
//                 age: usersage[i],
//             };
//             console.log(user);
//         }
//     }
// }

// islegalage(usersage);

interface User {
    fname: string;
    lname: string;
    age: number;
}

const islegalage = (users: User[])=>{
    let ans = [];

    for(let i=0;i<users.length;i++) {
        if(users[i].age > 18) {
            ans.push(users[i]);
        }
    }

    console.log(ans);
}

console

