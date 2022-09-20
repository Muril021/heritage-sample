"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Duck_1 = require("./Duck");
var duck = new Duck_1.Duck('Patolino', 3, 50, 2, true, 'preto c/ verde');
function takeOff(animal) {
    animal.fly();
}
takeOff(duck);
function toSwim(animal) {
    animal.swim();
}
toSwim(duck);
function toWalk(animal) {
    animal.walk();
}
toWalk(duck);
