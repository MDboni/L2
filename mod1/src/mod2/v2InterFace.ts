interface User {
    name: string;
    age: number;
    email: string;
}

const abc: User = {
    name: "Boni Amin jayed",
    age: 25,
    email: "boni.amin.jayed@example.com"
}

console.log(abc);

type UserType = {
    name: string;
    age: number;
    email: string;
}

const a: UserType = {
    name: "Boni Amin jayed",
    age: 25,
    email: "dw"
}
console.log(a);


interface order {
   product : string;
   price : number;
   quantity : number;
   status : "pending" | "shipped" | "delivered";
}

const or : order[] = [
   {
      product: "Laptop",
      price: 1000,
      quantity: 1,
      status: "pending"
   },
   {
      product: "Phone",
      price: 500,
      quantity: 2,
      status: "shipped"
   },
   {
      product: "Tablet",
      price: 300,
      quantity: 1,
      status: "delivered"
   }
]

console.log(or);


interface Employee {
    id: number;
    name: string;
    department: string;
    salary: number;
}

const ad = (employee: Employee): void =>{
      console.log(`Employee ID: ${employee.id}`);
      console.log(`Employee Name: ${employee.name}`);
      console.log(`Employee Department: ${employee.department}`);
      console.log(`Employee Salary: ${employee.salary}`);
}
ad({
    id: 1,
    name: "Boni Amin jayed",
    department: "IT",
    salary: 50000
})

console.log(ad);

type paymentResult = {
      success: boolean;
      message: string;
      amount: number;
}

const paye = (am : paymentResult): void =>{
   if(am.amount > 0){
      console.log(`paayment amount:${am.amount}is${am.message}`);
      
   }
}

paye({
   success: true,
   message: "successful",
   amount: 100
})

console.log(paye);

const bmw = ["BMW", "Audi", "Mercedes"];

for(const c of bmw){
   console.log(c);
}


const ar = []

const phone = ["iPhone", "Samsung", "OnePlus"];

for(const ab of phone){
   ar.push(ab);
}
ar.push("vivo");


console.log(ar);


