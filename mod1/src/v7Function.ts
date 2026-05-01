// করত। কিন্তু বড় প্রজেক্টে ফাংশনটি ভুল করে অন্য কিছু রিটার্ন করছে কি না, তা নিশ্চিত করতেই এই Return Type ডিফাইন করা হয়।

function createUser(name: string, age: number) : { name: string; age: number } {
 const user = {
    name: name,
    age: age
 }
 return user;

}

const u = createUser("Boni", 25);
console.log(u);

// const sum = (a: number, b: number) : number => {
//     return a + b;
// }

const sum = (a:number, b:number): number => a + b;
const result = sum(5, 10);
console.log(result);

// Type Alias দিয়ে clean version
type user = {
    name: string,
    age: number,
}

const abc = (name:string , age:number):user => {
    return {
        name,
        age
    }
}

const res = abc("Boni", 25);
console.log(res);

// 3. Function-এর parameter হিসেবে object

type User = {
    name: string,
    age: number,
}

const printUser = (user:User): void => {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}
printUser({ name: "Boni", age: 25 });

// 4. Function-এর parameter হিসেবে array of objects

type Product = {
    id: number,
    name: string,
    price: number,
}

function printProducts(products: Product[]): void {
    products.forEach(product => {
        console.log(`ID: ${product.id}, Name: ${product.name}, Price: ${product.price}`);
    })
};

    printProducts([
        { id: 1, name: "Laptop", price: 999 },
        { id: 2, name: "Smartphone", price: 499 },
        { id: 3, name: "Tablet", price: 299 },
    ]);

    // 5. Function থেকে array of objects return

    type pa = {
  name: string;
  price: number;
};

function getProducts(): pa[] {
  return [
    { name: "Honey", price: 500 },
    { name: "Ghee", price: 900 }
  ];
}

const products = getProducts();
console.log(products);


// 6. Object-এর ভিতরে function

type Calculator = {
  add: (a: number, b: number) => number;
  multiply: (a: number, b: number) => number;
};

const calculator: Calculator = {
  add: (a, b) => {
    return a + b;
  },
  multiply: (a, b) => {
    return a * b;
  }
};

console.log(calculator.add(10, 5));
console.log(calculator.multiply(10, 5));

// 7. Function-এর ভিতরে object বানানো
type Order = {
  productName: string;
  quantity: number;
  totalPrice: number;
};

function createOrder(productName: string, price: number, quantity: number): Order {
  const order = {
    productName,
    quantity,
    totalPrice: price * quantity
  };

  return order;
}

const order1 = createOrder("Honey", 500, 3);
console.log(order1);

// 9. Array object map করার function
type Product = {
  name: string;
  price: number;
};

function getProductNames(products: Product[]): string[] {
  return products.map((product) => product.name);
}

const names = getProductNames([
  { name: "Honey", price: 500 },
  { name: "Ghee", price: 900 }
]);

console.log(names);

// 10. Real-life example: Cart total
type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

function calculateTotal(cart: CartItem[]): number {
  return cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

const cartItems: CartItem[] = [
  { name: "Honey", price: 500, quantity: 2 },
  { name: "Ghee", price: 900, quantity: 1 }
];

console.log(calculateTotal(cartItems));