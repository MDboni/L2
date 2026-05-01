 let a :{
    name: "Boni",
    age: number,
    designation: string
 } = {
    name:"Boni",
    age:25,
    designation:"Developer"
 }


 
 a.age = 30;
 a.designation = "Senior Developer";

 console.log(a);


 const user: { name: string; age?: number } = {
  name: "Boni"
};

const users: {
  name: string;
  address?: {
    city: string;
    zip: number;
  };
} = {
  name: "Boni",
  address: {
    city: "Dhaka",
    zip: 1207
  }
};
