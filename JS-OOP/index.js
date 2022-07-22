
// function Circle(radius) {
//     this.radius = radius;

//     let defaultLocation = { x: 0, y: 0 };

//     this.draw = function () {
//         console.log('draw')
//     }

//     Object.defineProperty(
//         this, 'defaultLocation', {
//         get: function () {
//             return defaultLocation;
//         },
//         set: function (value) {
//             if (!value.x || !value.y)
//                 throw new Error('Invalid location')
//             defaultLocation = value
//         }
//     }
//     )
// }

// StopWatch Exercise
// const circle = new Circle(1)

// function Stopwatch() {
//     let started = false;
//     this.duration = 0;
//     let past = undefined

//     this.start = function () {
//         if (!started) {
//             past = Date.now();
//             this.started = true;
//         }
//     }
//     this.stop = function () {
//         if (started) {
//             this.duration += (Date.now() - past) / 1000;
//             this.started = false;
//         }
//     }
//     this.reset = function () {
//         this.duration = 0;
//     }
// }

// Mixins
// function mixin(target, ...sources) {
//     Object.assign(target, ...sources);
// }

// const cantEat = {
//     eat: function () {

//     }
// };

// const canWalk = {
//     eat: function () {

//     }
// };

// function Person() {

// }
// Object.assign(Person.prototype, cantEat, canWalk);
// // ===
// mixin(Person.prototype, cantEat, canWalk);

// class Circle {
//     constructor(radius) {
//         this.radius = radius;

//     }
//     static draw() {
//         console.log('log')
//     }
// }
// let c = new Circle(1);
// let Circle = function () {
//     this.draw = function () { console.log(this); }
// };

// let c = new Circle();

// c.draw();
// let draw = c.draw;
// draw = draw.bind(c);
// draw();

// Symbols
// WeakMap
// Getter and Setter
// const _radius = new WeakMap();
// class Circle {
//     constructor(radius) {
//         // this.radius = radius;
//         _radius.set(this, radius);

//     }

//     get radius() {
//         return _radius.get(this);
//     }

//     set radius(value) {
//         if (value <= 0) throw new Error("Invalid radius");
//         _radius.set(this, value);
//     }

// }

// const c = new Circle(1);

// class Shape {
//     constructor(color) {
//         this.color = color;
//     }
//     move() {
//         console.log('move');
//     }
// }

// class Circle extends Shape {
//     constructor(color) {
//         super(color);
//     }
//     draw() {
//         console.log('draw');
//     }

//     move() {
//         console.log('cant move');
//     }
// }
// const c = new Circle('red');

// Stack Exercise
// class Stack {
//     constructor() {
//         this.stack = [];
//         this.count = 0;
//     }
//     peek() {
//         if (this.count === 0) throw new Error('Empty stack')
//         else {
//             console.log(this.stack[this.count - 1]);
//         }
//     }
//     push(value) {
//         this.stack.push(value);
//         this.count++;
//     }
//     pop() {
//         if (this.count === 0) throw new Error('Empty stack')
//         else {
//             console.log(this.stack.pop());
//             this.count--;
//         }
//     }
// }

const _radius = new WeakMap();

export class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}
