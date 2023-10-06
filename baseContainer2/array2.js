const studentName = ["Alex", "Johnson","Rachel" ]
const new_Student = ["Metthew", "Adam", "Monica"]

// studentName.push(new_Student);

// console.log(studentName);

// const newStd =studentName.concat(new_Student);

// console.log(newStd);

// const all_Student = [...studentName, ...new_Student]

// console.log(all_Student);

// const student_List = [1,2,3, [4,5,6] ,7, [5,6, [5,6,7,8]]]

// const allList = student_List.flat(Infinity);

// console.log(allList);

console.log(Array.isArray("Max"));
console.log(Array.from("Max"));
console.log(Array.from({name:"Max"}));

let student_score1 = 200
let student_score2 = 208
let student_score3 = 500

console.log(Array.of(student_score1,student_score2,student_score3));