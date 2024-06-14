//Function scope
    function testFunctionScope(){
        var insideFunction=10;
    }
    console.log(insideFunction);
// The output shows an error saying uncaught since the function was not called and the variable was not global.

    function testFunctionScope2(){
        var insideFunction2=20;
        console.log(insideFunction2);
    }
   testFunctionScope2();
//The output shows 20 as the function was called which contained both the variable and the console.log method to print it inside the function.


//Block Scope

    function testBlockScope(){
        if(a>b){
        let a=10;
        let b=5;
        console.log(true);
        }
        else{
            return false;
        }
    }
    testBlockScope();
//This will not work because a and b are defined inside if block instead of the function. So the else block cannot access it for comparison.

    function testBlockScope2(){
        const a=10;
        const b=5;

        if(a>b){
            return true;
        }
        else{
            return false;
        }
    }
    testBlockScope2();
//This will work since the constants a and b are stored within the function block which we called upon later.