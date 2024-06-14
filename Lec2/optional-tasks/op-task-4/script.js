//Basic IIFE
    (function(){
        console.log("This is an IIFE.");
    })();
//output: This is an IIFE.

//IIFE with parameters
    (function(x,y){
        console.log(x+y)
    })(10,5);
//output: 15

//IIFE to avoid polluting global scope
    (function(){
        var localVariable = "This is a local IIFE variable";
        function localFunction() {
            console.log(localVariable);
        }
        localFunction();
    })();
//This will not pollute the global scope since the variable is within the IIFE.