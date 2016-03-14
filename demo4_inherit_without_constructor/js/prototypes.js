/**
 * This is an example of prototype inheritance where only the functions are inherited
 *
 * Based on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
 * Also: http://stackoverflow.com/a/34778248
 */


/**
 * Function that handles the inheritance
 *
 * @param {Function} child
 *   The child prototype
 * @param {Function} parent
 *   The parent prototype
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
}

/**
 * Show an alert with the sound of the animal
 */
Animal.prototype.makeSound = function () {
    if(typeof(this.sound) != typeof(undefined))
        alert(this.sound);
    else {
        alert('no sound')
    }
};

/**
 * Increase the age of the animal
 *
 * @param {int} years
 */
Animal.prototype.increaseAge = function (years) {
    this.age += years;
};


/**
 * A sheep.
 *
 * @param {String} color
 * @param {int} age
 * @param {String} name
 * @constructor
 */
function Sheep(color, age, name) {
    // We don't call the parent constructor we only want to inherit the functions
    this.color = color;
    this.sound = 'Beh!';
    this.age = age;
    this.name = name;
}

// Inheritance
Sheep.prototype = Object.create(Animal.prototype);
Sheep.prototype.constructor = Sheep;

Sheep.prototype.shed = function () {
    return 'wool';
};


/**
 * Run the demo
 */
function demo() {
    var sheep = new Sheep('white', 6, 'dolly');
    console.log("Is this an animal?: " + Animal.prototype.isPrototypeOf(new Sheep()));
    console.log("Is this a sheep?: " + Sheep.prototype.isPrototypeOf(new Sheep()));
    console.log(sheep.shed());
    console.debug(sheep);
    sheep.makeSound();
}
