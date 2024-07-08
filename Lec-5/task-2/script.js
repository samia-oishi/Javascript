    function calculateArea(length, width = length) {
        return length * width;
     }
  
    console.log(calculateArea(5)); // Output: 25
    console.log(calculateArea(5, 10)); // Output: 50