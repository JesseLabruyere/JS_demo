/**
 * In this inheritance example the subclass will inherit all properties of the base class using a inheritance function.
 *
 * Based on: http://www.sitepoint.com/simple-inheritance-javascript/
 */


/**
 * Function that handles the inheritance
 *
 * @param {prototype} child
 * @param {prototype} parent
 */
function inheritsFrom(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}


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
        if(typeof(sound) != typeof(undefined))
            alert(sound);
        else {
            alert('no sound')
        }
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
    // call the parent constructor, this is needed otherwise the properties will not be inherited because the constructor is never called
    Animal.call(this, color, 'Beh!', age, name);

    this.shed = function () {
        return 'wool';
    };
}
// Inheritance using the function
inheritsFrom(Sheep, Animal);


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
