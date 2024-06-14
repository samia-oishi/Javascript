//for loop
function printNumbers(){
    console.log("For Loop:");
    for(i=1; i<=10; i++){
        console.log(i);
    }
}
printNumbers(); //output= 1 2 3 4 5 6 7 8 9 10

//while loop
function printEvenNumbers(){
    console.log("While Loop:");
    let i=2;
    while(i<=20){
        console.log(i);
        i+=2;
    }
}
printEvenNumbers(); //output= 2 4 6 8 10 12 14 16 18 20

//do-while loop
function printOddNumbers(){
    console.log("Do-while Loop:");
    let i=1;
    do{
        console.log(i);
        i+=2;
    }while(i<=20)
}
printOddNumbers(); //output= 1 3 5 7 9 11 13 15 17 19