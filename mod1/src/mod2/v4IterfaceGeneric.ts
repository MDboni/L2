
// interface developer<t> {
//     name: string;
//     age: number;
//     skills: { name: string; level: string };
//     lavel: t ;
// }

// const dev1 : developer<{
//     name1: string;
//     level1: string;
// }> ={
//     name: "John",
//     age: 30,
//     skills: { name: "TypeScript", level: "Advanced" },
//     lavel: {
//         name1: "Senior Developer",
//         level1: "Expert"
//     }
// }

// const dev2 : developer<string> ={
//     name: "Jane",
//     age: 25,
//     skills: { name: "JavaScript", level: "Intermediate" },
//     lavel: "Mid-level Developer"
// }

// console.log(dev1);
// console.log(dev2);


interface bonix<t,x>{
    brand: string;
    model: string;
    price: number;
    quantity: t;
    order:x;
}

type or ={
    size: string;
    color: string;
}

const order1 : bonix<or, number> = {
    brand: "Apple",
    model: "iPhone 13",
    price: 999,
    quantity: {
        size: "Medium",
        color: "Black"
    },
    order: 1
}


console.log(order1)