"use strict";
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let employee = { id: 1 };
let newEmployee = { id: 1, name: 'me' };
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
let weight;
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greet(name) {
    if (name) {
        console.log('HI');
    }
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
let log = null;
log === null || log === void 0 ? void 0 : log(1);
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30
};
let phone = document.getElementById('phone');
phone.value;
function render(document) {
    if (typeof document === 'string') {
        document.toUpperCase();
    }
}
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Invalid amount');
        }
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
}
let account = new Account(0, 'Me', 1000);
//# sourceMappingURL=index.js.map