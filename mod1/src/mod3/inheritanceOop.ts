// class boni {
//     name: string;
//     age: number;
//     married: boolean;

//     constructor(name:string, age:number, married:boolean){
//         this.name = name;
//         this.age = age;
//         this.married = married;
//     }

//     great(){
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am ${this.married ? "married" : "not married"}.`);
//     }
// }

// const result = new boni("Boni Amin Jayed", 25, true);
// result.great();

class user{
    id: number;
    name: string;
    age: number;

    constructor(id:number, name:string, age:number){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    login(){
        console.log(`${this.name} has logged in.`);
    }
}

class admin extends user{
    role: string;

    constructor(id:number, name:string, age:number, role:string){
        super(id, name, age);
        this.role = role;
    }

    admin1(){
        console.log(`${this.name} is an admin with the role of ${this.role}.`);
    }
}

class guest extends user{
    address: string;

    constructor(id:number, name:string, age:number, address:string){
        super(id, name, age);
        this.address = address;
    }

    guest(){
        console.log(`${this.name} is a guest from ${this.address}.`);
    }
}

const user1 = new user(1,"Boni Amin Jayed", 25);
user1.login();

const admin1 = new admin(2, "Admin User", 30, "Super Admin");
admin1.login();
admin1.admin1();

const guest1 = new guest(3, "Guest User", 20, "Dhaka");
guest1.login();
guest1.guest();