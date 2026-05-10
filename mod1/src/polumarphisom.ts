class Animal {
  makeSound(): string {
    return "Animal makes a sound";
  }
}

class Dog extends Animal {
  makeSound(): string {
    return "Dog barks";
  }
}

class Cat extends Animal {
  makeSound(): string {
    return "Cat meows";
  }
}


const animals: Animal[] = [new Dog(), new Cat()];

animals.forEach((animal) => {
  console.log(animal.makeSound());
});




class Payment {
  pay(amount: number): string {
    return `Paid ${amount}`;
  }
}

class BkashPayment extends Payment {
  pay(amount: number): string {
    return `Paid ${amount} using bKash`;
  }
}

class NagadPayment extends Payment {
  pay(amount: number): string {
    return `Paid ${amount} using Nagad`;
  }
}

class CardPayment extends Payment {
  pay(amount: number): string {
    return `Paid ${amount} using Card`;
  }
}

const payments: Payment[] = [
  new BkashPayment(),
  new NagadPayment(),
  new CardPayment(),
];

payments.forEach((payment) => {
  console.log(payment.pay(500));
});


