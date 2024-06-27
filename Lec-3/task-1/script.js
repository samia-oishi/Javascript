//this in global context
    console.log(this===window)
    //output will be true

//this in object method
    const sayHi = {
        name:'Oishi',
        greet: function() {
            console.log("Hi "+ this.name)
        }
    }
    sayHi.greet();
    //output will be Hi Oishi

//this in function context
    function show() {
        console.log(this);
    }
    show(); 
    // Outputs will be window (in non-strict mode) or undefined (in strict mode)

//this in constructor context
    function Human(name) {
        this.name = name;
    }
    const human1 = new Human('Oishi');
    console.log(human1.name); 
    // Output will be Oishi  

//this in class context
    class HumanClass {
        constructor(name) {
        this.name = name;
        }
        greet() {
        console.log(this.name);
        }
    }
    
    const human2 = new HumanClass('Samia');
    human2.greet(); 
    // Output will be Samia
  
