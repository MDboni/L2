type admin = {
    id: number;
    name: string;
    role: string;
}

type manager = {
    id: number;
    des:string;
}

type employee = admin | manager;

const user1: employee = {
    id: 1,
    name: "Boni Amin Jayed",
    role: "Admin"
}

console.log(user1);
