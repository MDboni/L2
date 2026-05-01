
let abc: string = "Boni Amin jayed";

console.log(abc);

let def: number = 123;

let isTrue: boolean = true;

isTrue = false;

console.log(def);
console.log(isTrue);

let xyz: any = "Hello World";
xyz = 456;
console.log(xyz);

let undef: undefined = undefined;
let nul: null = null;

console.log(undef);
console.log(nul);

let arr: number[] = [1, 2, 3, 4, 5];
console.log(arr);

let tuple: [string, number] = ["Hello", 123];
console.log(tuple);

let enumColor: "Red" | "Green" | "Blue";
enumColor = "Red";
console.log(enumColor);

let unknownVar: unknown = "This is an unknown type";
if (typeof unknownVar === "string") {
    console.log(unknownVar.toUpperCase());
}