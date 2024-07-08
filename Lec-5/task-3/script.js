function getStreetName(user) {
    return user.address?.street?.name || "Street not found";
  }
  
const user = {
    address: {
        street: {
            name: "CR Dutta Road"
        }
    }
  };
  
const userWithoutStreet = {
    address: {}
  };
  
console.log(getStreetName(user)); // Output: CR Dutta Road
console.log(getStreetName(userWithoutStreet)); // Output: Street not found
    
  