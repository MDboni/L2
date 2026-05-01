
let a : number[] = [1, 2, 3];
a.push(4);
console.log(a);

let b : string[] = ["Hello", "World"];
b.push("TypeScript");
console.log(b);

let c : (number | string | boolean)[] = [1, "Hello", true];
console.log(c);

// tupel
let d = ["husbend", 30 , "wife", 28] as [string, number, string, number];