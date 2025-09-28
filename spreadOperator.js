const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine arrays
const combined = [...arr1, ...arr2];
console.log(combined);

// Copy objects
const student = { name: "Nifemi", age: 20 };
const updatedStudent = { ...student, course: "COS 209" };
console.log(updatedStudent);
