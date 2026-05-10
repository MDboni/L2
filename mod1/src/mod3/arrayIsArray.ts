const abc : number[] = [1, 2, 3, 4, 5];

const a = Array.isArray(abc);

console.log(a); 

const b : object = { name: "John", age: 30 };

const c = Array.isArray(b); 
console.log(c); // Output: falses


const res = {
    status: "200",
    data : {
        product : [
            { id: 1, name: "Product 1", price: 10 },
            { id: 2, name: "Product 2", price: 20 },
            { id: 3, name: "Product 3", price: 30 }
        ]
    }
}

res.data.product.map((p)=> console.log(p.name));

const d = Array.isArray(res.data.product);
console.log(d); // Output: true