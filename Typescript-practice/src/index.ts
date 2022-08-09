enum Size {Small = 1, Medium, Large};

let employee:{
    id: number,
    name?: string,
} = {id: 1};


// Type Aliases
type Employee = {
    readonly id: number,
    name: string
}

let newEmployee: Employee = {id:1, name:'me'};

// Union Types
function kgToLbs(weight: number | string): number{
    // Narrowing
    if  (typeof weight === 'number'){
        return weight * 2.2
    }
    else{
        return parseInt(weight) * 2.2
    }
}

// Intersection Types
let weight: number & string;
type Draggable = {
    drag: () => void;
}
type Resizable = {
    resize: () => void;
}
type UIWidget = Draggable & Resizable;
let textBox: UIWidget ={
    drag: () => {},
    resize: () => {}
}

// Literal Types
type Quantity = 50 | 100
let quantity: 50 | 100 = 100;

// Nullible Types
function greet(name: string | null | undefined){
    if(name){
        console.log('HI')
    }
}

// Optional Chaining
type Customer = {
    birthday: Date;
}

function getCustomer(id: number): Customer | null | undefined{
    return id === 0 ? null : {birthday: new Date()};
}

let customer = getCustomer(0);
// if(customer !== null && customer !== undefined){
//     console.log(customer.birthday);
// }
    // Optional property access operator
    // ===
console.log(customer?.birthday);
    // Optional element access operator
    // a?.[0]
    // Optioanl call
let log: any = null;
log?.(1);


let speed: number | null = null;
let ride = {
    // Nullish coalescing operator
    // Null or Undefined
    // To prevent case can't set speed of 0
    speed: speed ?? 30
}

// Type assertion
let phone = document.getElementById('phone') as HTMLInputElement
phone.value

// Unknown Type
function render(document: unknown){
    // Narrowing
    if (typeof document === 'string'){
        document.toUpperCase();
    }
}

// Never type
// function processEvents(): never {
    
// }


class Account{
    // readonly id:number;
    // owner: string;
    // private _balance: number;
    // Optional
    nickname?: string;

    constructor(public readonly id: number, public owner: string, private _balance: number){
        // this.id = id;
        // this.owner = owner;
        // this._balance = balance;
    }

    deposit(amount: number): void{
        if (amount <= 0){
            throw new Error('Invalid amount')
        }
        this._balance += amount;
    }

    get balance(): number{
        return this._balance;
    }

    set balance(value: number){
        value = 0;
    }
}

let account = new Account(0, 'Me', 1000);


// Index signature
class SeatAssignment{
    [seatNumber: string]: string;
}
let seats = new SeatAssignment();
seats.A1 = 'Me'
