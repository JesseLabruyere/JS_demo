/**
 * In this inheritance example the subclass will inherit all properties of the base class.
 *
 * Based on: http://www.sitepoint.com/simple-inheritance-javascript/
 * Prototypeof https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf
 */


/**
 * A basic animal.
 *
 * @param {String} color
 *   The color of the animal.
 * @param {String} sound
 *   The sound of the animal
 * @param {int} age
 *   The age of the animal
 * @param {String} name
 *   The name of the animal
 * @constructor
 */
function Animal(color, sound, age, name) {
    this.color = color;
    this.sound = sound;
    this.age = age;
    this.name = name;

    /**
     * Show an alert with the sound of the animal
     */
    this.makeSound = function () {
        alert(sound);
    };

    /**
     * Increase the age of the animal
     *
     * @param {int} years
     */
    this.increaseAge = function (years) {
        this.age += years;
    };
}


/**
 * A sheep.
 *
 * @param {String} color
 * @param {int} age
 * @param {String} name
 * @constructor
 */
function Sheep(color, age, name) {
    // call the parent constructor, this is not always necessary since the constructor was already called once
    Sheep.prototype.constructor(color, 'Beh!', age, name);

    this.shed = function () {
        return 'wool';
    };
}
// Sheep inherits from Animal by setting an Animal object as prototype
Sheep.prototype = new Animal();


/**
 * Run the demo
 */
function demo() {
    var sheep = new Sheep('white', 6, 'dolly');
    console.log("Is this an animal?: " + Animal.prototype.isPrototypeOf(new Sheep()));
    console.log("Is this a sheep?: " + Sheep.prototype.isPrototypeOf(new Sheep()));
    console.debug(sheep);
    sheep.makeSound();
}
