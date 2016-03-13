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
    function makeSound() {
        alert(sound);
    }

    /**
     * Increase the age of the animal by
     *
     * @param {int} years
     */
    function increaseAge(years) {
        this.age += years;
    }
}


/**
 * 
 * @param {String} color
 * @param {int} age
 * @constructor
 */
function Sheep(color, age) {
    this.prototype.constructor(color, 'Beh!', age);


}
Sheep.prototype = new Animal();
