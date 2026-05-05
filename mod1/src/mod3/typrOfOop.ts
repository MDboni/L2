class calculator{
    calculete : string | number;

    constructor(calculete: string | number){
        if(typeof calculete === "string"){
            this.calculete = calculete;
        } else {
            this.calculete = calculete;
        }
    }

    calculate(){
        if(typeof this.calculete === "string"){
            console.log(`The string is: ${this.calculete}`);
        } else {
            console.log(`The number is: ${this.calculete}`);
        }
    }
}

const calc1 = new calculator("Hello World");
calc1.calculate();


const calc2 = new calculator(123);
calc2.calculate();


class payment{
    agent : string | number;

    constructor(agent: string | number){
        if(typeof agent === "string"){
            this.agent = agent;
        } else {            this.agent = agent;
        }
    }

    pay(){
        if(typeof this.agent === "string"){
            console.log(`The payment agent is: ${this.agent}`);
        } else {
            console.log(`The payment amount is: ${this.agent}`);
        }
    }
}

const pay1 = new payment("PayPal");
pay1.pay();

const pay2 = new payment(100);
pay2.pay();

