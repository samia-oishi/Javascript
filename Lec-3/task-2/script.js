// Utility Function:

    function getArea() { 
        return this.width*this.height; 
    } 
    
    // Object 1 
    const rectangle = { 
        width: 10, height: 20 
    }; 
    
    // Object 2 
    const square = { 
        width: 15, height: 15 
    };
    
// Using call
    const rectangleAreaC = getArea.call(rectangle);
    console.log(rectangleAreaC); 
    // Output: 200
    
    const squareAreaC = getArea.call(square);
    console.log(squareAreaC); 
    // Output: 225
    
// Using bind
    const rectangleAreaB = getArea.bind(rectangle);
    console.log(rectangleAreaB()); 
    // Output: 200
    
    const squareAreaB = getArea.bind(square);
    console.log(squareAreaB()); 
    // Output: 225