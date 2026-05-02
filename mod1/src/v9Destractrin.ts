
const abc = {
    id: 1,
    name: "Boni Amin Jayed",
    age: 30,
    class:{
        name: "10th Grade",
        section: "A"
    },
    subjects: ["Math", "Science", "English"]
}


const {id, name, age, class:{name: className, section}, subjects} = abc;

console.log(id);
console.log(name);
console.log(age);
console.log(className);
console.log(section);
console.log(subjects);

const number : number[] = [1, 2, 3, 4, 5];

const [first, second, third, fourth, fifth] = number;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
console.log(fifth);
