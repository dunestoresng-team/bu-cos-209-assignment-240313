const numbers = [1, 2, 3, 4, 5];

// map
const squared = numbers.map(n => n * n);

// filter
const evens = numbers.filter(n => n % 2 === 0);

// reduce
const sum = numbers.reduce((acc, n) => acc + n, 0);

console.log(squared, evens, sum);
