//we can declare object in two way litral and constructors 

const mySym = Symbol("key1")
const user ={ //object litral

    studentName: "Alex",
    "lastName" : "Parker",
    [mySym]: "myKey",
    age: 21,
    location: "Jaipur",
    email: "alex@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

console.log(user.studentName);
console.log(user["lastName"]);
console.log(user["email"]);
console.log(user[mySym]);

user.email = "alexparker@gmail.com"
console.log(user);
Object.freeze(user)
user.email = "alexparker@gmail.com"
console.log(user);







//Object.create //construtor method object