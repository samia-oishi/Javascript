function getDayName(dayNum){
    switch(dayNum){
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Please insert numbers ranging between 1-7 only.";
    }
}
console.log(getDayName(3)); // Output: Tuesday
console.log(getDayName(7)); // Output: Saturday
console.log(getDayName(1)); // Output: Sunday
console.log(getDayName(0)); // Output: Please input numbers ranging between 1-7 only.