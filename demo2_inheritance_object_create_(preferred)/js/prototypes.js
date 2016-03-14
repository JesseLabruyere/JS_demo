/**
 * In this inheritance example the subclass will inherit all properties of the base class.
 *
 * Based on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
 * Comparison: http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/
 * Comparison: http://stackoverflow.com/questions/13040684/javascript-inheritance-object-create-vs-new
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
// The Object.create() method creates a new object with the specified prototype object and properties,
// this does not call the constructor of Animal.
Sheep.prototype = Object.create(Animal.prototype);
Sheep.prototype.constructor = Sheep;


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
