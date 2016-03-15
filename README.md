# JS Demo
### Examples of prototyping and JavaScript design patterns


## Prototypes
Prototypes are basically blueprint objects that can be used to create new objects.

A prototype function works as the constructor of the prototype that will be called when creating new objects of its type.
```
function Animal(color, sound, age, name) {
    this.color = color;
    this.sound = sound;
    this.age = age;
    this.name = name;
}
```
'this' refers to the current object, the new object that gets created when the constructor is called.

You can create an object using a prototype.
```
var animal = new Animal('brown', 'Wuff!', 2, 'Fidus');
```


## Adding functions to Prototypes
It is possible to add functions to the prototype itself or to the object inside the constructor.
Adding functions to the prototype is more flexible because it makes it possible to inherit the functions only later on.

### Adding function to the prototype
```
function Animal(color, sound, age, name) {
    this.color = color;
    this.sound = sound;
    this.age = age;
    this.name = name;
}

Animal.prototype.makeSound = function () {
    alert(sound);
};
```

### Adding function to the object inside the constructor
```
function Animal(color, sound, age, name) {
    this.color = color;
    this.sound = sound;
    this.age = age;
    this.name = name;
    
    this.makeSound = function () {
        alert(sound);
    };
}
```

You can call the functions in both examples normally on every object you create using the prototypes
```
var animal = new Animal('brown', 'Wuff!', 2, 'Fidus');
animal.makeSound();
```


## Prototype inheritance
Inheritance with prototypes is a way of using a existing prototype with its functions as base for a new prototype.
There are different ways to implement inheritance using prototypes. The first example is using 'object.create()'
This seems to be the most flexible way since the constructor is not called by default. The other way is by creating a new object instance of the parent prototype.

### Inheritance using object.create()
```
function Animal(color, sound, age, name) {
    this.color = color;
    this.sound = sound;
    this.age = age;
    this.name = name;
}

Animal.prototype.makeSound = function () {
    alert(this.sound);
};

function Dog(color, sound, age, name, breed){
    Animal.call(this, color, sound, age, name);
    this.breed = breed;
}
Dog.prototype = object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

var dog = new Dog('brown', 'Wuff!', 2, 'Fidus', 'Pomeranian');
dog.makesound();
```
You can see we pass the object that is being created to the constructor of Animal using 'this' again.


### If we only want the functions
If we only want the functions we can simply never call the parent constructor
```
function Animal(color, sound, age, name) {
    this.color = color;
    this.sound = sound;
    this.age = age;
    this.name = name;
}

Animal.prototype.makeSound = function () {
    alert(this.sound);
};

function Dog(sound, breed){
    this.sound = sound;
    this.breed = breed;
}
Dog.prototype = object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

var dog = new Dog('Wuff!', 'Pomeranian');
dog.makesound();
```

### Inheritance by setting the prototype to a new object instance of the parent prototype
Using this way of configuring inheritance has the drawback that the parent constructor is always called (a new instance of Animal is created), this can be undesirable.
When overriding functions the parent function will be lost, in the first implementation its still possible to call the overridden parent function.
```
function Animal(color, sound, age, name) {
    this.color = color;
    this.sound = sound;
    this.age = age;
    this.name = name;
    
    this.makesound = function () {
        alert(this.sound);
    };
}

Animal.prototype.makeSound = function () {
    alert(this.sound);
};

function Dog(color, sound, age, name, breed){
    Animal.call(this, color, sound, age, name)
    this.breed = breed;
}
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

var dog = new Dog('brown', 'Wuff!', 2, 'Fidus', 'Pomeranian');
dog.makesound();
```

## Overriding functions
Functions that get inherited can be overridden. Depending on the way the prototyping was set up the parent function can still be used.

### Override and call parent function
In this example we override the function 'makeSound'. But we still call the parent function inside that function. We pass the current object using 'this'.
```
function Animal(color, sound, age, name) {
    this.color = color;
    this.sound = sound;
    this.age = age;
    this.name = name;
}

Animal.prototype.makeSound = function () {
    alert(this.sound);
};

function Dog(color, sound, age, name, breed){
    Animal.call(this, color, sound, age, name);
    this.breed = breed;
}
Dog.prototype = object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.makeSound = function () {
    for(var i = 0; i < 5; i++) {
        Animal.prototype.makesound.call(this)
    }
};

var dog = new Dog('brown', 'Wuff!', 2, 'Fidus', 'Pomeranian');
dog.makesound();
```

## Private functions and properties
There are ways to make private functions and properties using the module design pattern. These private functions and properties can only be used by public functions. The way it works is by wrapping all declarations inside a wrapper function. This function returns the Animal prototype object. Only the properties and functions that are directly bound to the prototype are accessable outside the scope of the wrapper function.
```
var Animal = (function() {

    var privateProperty = 'I am a Private property'

    function Animal(color, sound, age, name) {
        this.color = color;
        this.sound = sound;
        this.age = age;
        this.name = name;
    }

    function privateFunction() {
        console.log('I am a private function');
    }

    Animal.prototype.makeSound = function () {
        privateFunction();
        console.log(privateProperty);

        alert(this.sound);        
    };

    /**
     * Increase the age of the animal
     *
     * @param {int} years
     * @public
     */
    Animal.prototype.increaseAge = function (years) {
        this.age += years;
    };

    return Animal;
    
}());

var animal = new Animal('brown', 'Wuff!', 2, 'Fidus');
animal.makeSound();
```







