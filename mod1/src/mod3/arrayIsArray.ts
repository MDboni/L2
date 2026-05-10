const abc : number[] = [1, 2, 3, 4, 5];

const a = Array.isArray(abc);

console.log(a); 

const b : object = { name: "John", age: 30 };

const c = Array.isArray(b); 
console.log(c); // Output: falses