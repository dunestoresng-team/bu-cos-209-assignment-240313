const student = { name: "Nifemi", age: 20, course: "COS 209" };

const { name, course } = student;
console.log(`${name} is taking ${course}`);

const scores = [80, 90, 70];
const [math, eng, sci] = scores;
console.log(math, eng, sci);
