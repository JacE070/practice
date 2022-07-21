
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
function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

const cantEat = {
    eat: function () {

    }
};

const canWalk = {
    eat: function () {

    }
};

function Person() {

}
Object.assign(Person.prototype, cantEat, canWalk);
// ===
mixin(Person.prototype, cantEat, canWalk);