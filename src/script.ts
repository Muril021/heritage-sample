import { Duck } from "./Duck";
import { ICanFly } from "./ICanFly";
import { ICanSwim } from "./ICanSwim";
import { ICanWalk } from "./ICanWalk";

const duck = new Duck('Patolino', 3, 50, 2, true, 'preto c/ verde');

function takeOff(animal: ICanFly) {
    animal.fly();
}
takeOff(duck);

function toSwim(animal: ICanSwim) {
    animal.swim();
}
toSwim(duck);

function toWalk(animal: ICanWalk) {
    animal.walk();
}
toWalk(duck);