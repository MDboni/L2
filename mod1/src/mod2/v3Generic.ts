// TypeScript Generic হলো এমন একটা system যেখানে আপনি type কে variable বানান—যাতে একই code different type-এর জন্য reuse করা যায়।

const a : string[] = ["Hello", "World"];

const x : Array<string> = ["Hello", "World"];

const b : number[] = [1, 2, 3, 4, 5];

const y : Array<number> = [1, 2, 3, 4, 5];

type user = {
    name: string;
    age: number;
    email: string;
}

const users: Array<user> = [
    {
        name: "Boni Amin jayed",
        age: 30,
        email: "boni@example.com"
    },
    {
        name: "John Doe",
        age: 25,
        email: "fsda"
    }
]


const createArray = <T,>(value: T): T[] => {
  return [value];
};

// call
const names = createArray<string>("Rahim");
const numbers = createArray<number>(10);