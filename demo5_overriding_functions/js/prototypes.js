/**
 * This is an example of prototype inheritance where only the functions are inherited and a method is overridden
 *
 * Based on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
 * Also: http://stackoverflow.com/questions/11542192/override-function-in-javascript
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

/**
 * Shed the sheep
 *
 * @returns {string}
 */
Sheep.prototype.shed = function () {
    return 'wool';
};

/**
 * We override the increaseAge function from Animal
 *
 * @param {int} years
 * @override
 */
Sheep.prototype.increaseAge = function (years) {
    // Call the original function inside the new function
    Animal.prototype.increaseAge.call(this, years * 5);
};


/**
 * Run the demo
 */
function demo() {
    var sheep = new Sheep('white', 6, 'dolly');
    console.log("Is this an animal?: " + Animal.prototype.isPrototypeOf(new Sheep()));
    console.log("Is this a sheep?: " + Sheep.prototype.isPrototypeOf(new Sheep()));
    console.log(sheep.shed());
    sheep.increaseAge(1);
    console.log(sheep.age);
    console.debug(sheep);
    sheep.makeSound();
}
