type user = {
    name: string;
    age: number;
    email: string;
}

const abc : unknown = {
    name: "Boni Amin jayed",
    age: 25,
    email: "asd"
}

const def : user = abc as user;

console.log(def);


interface Em {
    name: string;
    age: number;
    email: string;
}

const a :unknown = [{
    name: "Boni Amin jayed",
    age: 25,
    email: "asd"
}]

a as Em[];