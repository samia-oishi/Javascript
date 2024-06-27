// Constructor function for Animal
    function Animal(name) {
        this.name = name;
    }

    Animal.prototype.eat = function() {
        console.log(`${this.name} is eating.`);
    };

// Constructor function for Cow that inherits from Animal
    function Cow(name, breed) {
        Animal.call(this, name); 
        this.breed = breed;
    }

    Cow.prototype = Object.create(Animal.prototype);
    Cow.prototype.constructor = Cow;

    Cow.prototype.bark = function() {
        console.log(`${this.name} is mooing.`);
    };

    const Cow1 = new Cow('Hamba', 'Australian Cow');
    Cow1.eat(); 
    // Output: Hamba is eating.
    Cow1.bark(); 
    // Output: Hamba is mooing.