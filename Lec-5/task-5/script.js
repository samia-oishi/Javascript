function processArray(arr){
    return arr

    .map(item => {

        const[name,age] = item.split('-');
        return { name, age: parseInt(age, 10) };
    })

    .filter(person => person.age >= 18);
}

const input = ["Zohan-25", "Wafi-17", "Saher-19"];
console.log(processArray(input));
// Output: [{ name: "Zohan", age: 25 }, { name: "Saher", age: 19 }]