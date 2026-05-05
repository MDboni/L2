function findById<T extends { id: number }>(
  items: T[],
  id: number
): T | undefined {
  return items.find((item) => item.id === id);
}

function ab<T extends {id: number}>(
    items: T[],
    id: number
): T | undefined {
    return items.find((item) => item.id === id);
}


interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Honey", price: 750 },
  { id: 2, name: "Ghee", price: 1200 },
];

const product = findById(products, 2);

console.log(product?.name);